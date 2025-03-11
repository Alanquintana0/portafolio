from PIL import Image

def augment_dataset(input_folder, output_folder, num_augmentations=3):
    # Crear la carpeta de salida si no existe
    os.makedirs(output_folder, exist_ok=True)

    # Transformaciones con Albumentations
    transform = A.Compose([
        A.RandomBrightnessContrast(p=0.5),
        A.HorizontalFlip(p=0.5),
        A.Affine(scale=(0.8, 1.2), translate_percent=(0.2, 0.2), rotate=(-30, 30), p=0.7),
        A.GaussianBlur(p=0.2),
        A.CLAHE(p=0.2),
    ])

    # Recorrer todas las subcarpetas (clases)
    for class_folder in os.listdir(input_folder):
        class_path = os.path.join(input_folder, class_folder)
        if not os.path.isdir(class_path):
            continue  # Saltar archivos que no sean carpetas

        # Crear la carpeta en el directorio de salida
        class_output_path = os.path.join(output_folder, class_folder)
        os.makedirs(class_output_path, exist_ok=True)

        # Obtener imágenes dentro de la carpeta
        image_files = [f for f in os.listdir(class_path) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
        for image_file in image_files:
            image_path = os.path.join(class_path, image_file)
            try:
              # Cargar imagen con PIL y convertir a RGB
              img = Image.open(image_path).convert("RGB")
              img_np = np.array(img)  # Convertir a NumPy para Albumentations

              # Guardar la imagen original en la carpeta de salida
              original_output_path = os.path.join(class_output_path, f"orig_{image_file}")
              img.save(original_output_path)

              # Generar imágenes aumentadas
              for i in range(num_augmentations):
                  augmented_img = transform(image=img_np)["image"]
                  augmented_output_path = os.path.join(class_output_path, f"aug_{i}_{image_file}")
                  cv2.imwrite(augmented_output_path, cv2.cvtColor(augmented_img, cv2.COLOR_RGB2BGR))  # Convertir de RGB a BGR
          except Exception as e:
              print(f"⚠️ Error al procesar {image_file}: {e}")

          
        

    print(f"✅ Dataset aumentado y guardado en {output_folder}")


input_dir = "/content/drive/MyDrive/babyDB/babyDB"
output_dir = "/content/drive/MyDrive/babyDB/babyDBaug"
# 📌 Llamar a la función con tus carpetas
augment_dataset(input_dir, output_dir, num_augmentations=2)