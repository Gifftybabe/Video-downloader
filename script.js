 /*
      const urlInput = document.getElementById('url');
      const downloadBtn = document.getElementById('btn');


      downloadBtn.addEventListener("click", async () => {
        try {
          const response = await fetch(urlInput.value);
          const file = await response.blob();
          const link = document.createElement("a");
          link.href = URL.createObjectURL(file);
          link.download = new Date().getTime();

          link.click();
          // URL.revokeObjectURL(url);
        } catch (error) {
          alert.error("Error downloading the video:", error);
          
        }
      });

      */
      

      /*
      // Using callback
      const urlInput = document.getElementById('url');
const downloadBtn = document.getElementById('btn');

downloadBtn.addEventListener('click', () => {
  downloadVideo(urlInput.value, (error) => {
    if (error) {
      alert('Error downloading the video: ' + error);
    }
  });
});

function downloadVideo(videoUrl, callback) {
  fetch(videoUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.blob();
    })
    .then((blob) => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = new Date().getTime();
      link.click();
      URL.revokeObjectURL(link.href);
      callback(null); // No error, download completed successfully
    })
    .catch((error) => {
      callback(error); // Pass the error to the callback function
    });
}
*/
      

const urlInput = document.getElementById('url');
const downloadBtn = document.getElementById('btn');

downloadBtn.addEventListener('click', () => {
  downloadVideo(urlInput.value)
    .then(() => {
    })
    .catch((error) => {
      alert('Error downloading the video: ' + error);
    });
});

function downloadVideo(videoUrl) {
  return new Promise((resolve, reject) => {
    fetch(videoUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = new Date().getTime();
        link.click();
        URL.revokeObjectURL(link.href);
        resolve(); 
      })
      .catch((error) => {
        reject(error); 
      });
  });
}