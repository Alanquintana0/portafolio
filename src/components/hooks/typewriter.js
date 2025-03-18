import { useState, useEffect } from "react";

const useTypeWriter = (text, htmlContent, speed = 20) => {
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
        const parts = text.split(/<strong>|<\/strong>/);
        let result = '';
        let inStrong = false;
        
        for (let i = 0; i < parts.length; i++) {
            const partLength = result.length + parts[i].length;
            const visiblePart = displayText.length > partLength 
                ? parts[i] 
                : parts[i].substring(0, Math.max(0, displayText.length - result.length));
            
            if (visiblePart) {
                result += inStrong 
                    ? `<strong>${visiblePart}</strong>` 
                    : visiblePart;
            }
            inStrong = !inStrong;
        }
        return result;
    };

    return <span dangerouslySetInnerHTML={{ __html: createTypingHTML() }} />;
};

const Typewriter = ({ text, htmlContent, speed }) => {
    const displayText = useTypeWriter(text, htmlContent, speed);
    return displayText;
};

export default Typewriter;