export const getImageByFile = (file: File): Promise<{ width: number; height: number; imageSrc: string }> => {
  const reader = new FileReader();
  const image = new Image();

  reader.readAsDataURL(file);

  return new Promise((resolve) => {
    reader.onload = (file): void => {
      const imageSrc = file.target.result as string;

      image.src = imageSrc;

      image.onload = function () {
        resolve({
          width: image.width,
          height: image.height,
          imageSrc
        });
      };
    };
  });
};
