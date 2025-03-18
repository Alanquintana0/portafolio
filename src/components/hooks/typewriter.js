import { useState, useEffect } from "react";

const useTypeWriter = (text, htmlContent, speed = 10) => {
    const [displayText, setDisplayText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if(i < text.length){
                setDisplayText(prevText => prevText + text.charAt(i));
                i++;
            }else{
                clearInterval(typingInterval);
                setIsComplete(true);
            }
        }, speed);

        return () => {
            clearInterval(typingInterval);
        };
    }, [text, speed]);

    if (isComplete) {
        return htmlContent;
    }
    
    const createTypingHTML = () => {
        // Dividir el texto en párrafos
        const paragraphs = displayText.split('\n\n').filter(p => p.trim());
        
        // Procesar cada párrafo para mantener las etiquetas strong
        const processedParagraphs = paragraphs.map(paragraph => {
            const parts = paragraph.split(/<strong>|<\/strong>/);
            let result = '';
            let inStrong = false;
            
            for (let i = 0; i < parts.length; i++) {
                if (parts[i].trim()) {
                    result += inStrong 
                        ? `<strong>${parts[i]}</strong>` 
                        : parts[i];
                }
                inStrong = !inStrong;
            }
            return `<p>${result}</p>`;
        });

        return paragraphs.length > 0 
            ? paragraphs.map((_, index) => (
                processedParagraphs[index]
              )).join('')
            : '';
    };

    return <span dangerouslySetInnerHTML={{ __html: createTypingHTML() }} />;
};

const Typewriter = ({ text, htmlContent, speed }) => {
    const displayText = useTypeWriter(text, htmlContent, speed);
    return displayText;
};

export default Typewriter;