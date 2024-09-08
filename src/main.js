const searchInput=document.getElementById('search-input')
const searchButton=document.getElementById('search-button')
const mediaDiv=document.getElementById('media-div')

searchButton.addEventListener('click', () => {
    const url = `${import.meta.env.VITE_API_URL}?key=${import.meta.env.VITE_API_KEY}&q=${encodeURIComponent(searchInput.value)}&image_type=photo&orientation=horizontal&safesearch=true`;
  
    const fetchData = (url) => {
      return new Promise((resolve, reject) => {
        fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Veri alınırken bir hata oluştu');
            }
            return response.json();
          })
          .then((data) => resolve(data))
          .catch((error) => reject('Bir hata oluştu: ' + error.message));
      });
    };
  
    fetchData(url)
      .then((data) => {
        console.log('Kullanıcı verisi:', data);
}).catch((error)=>
{
    console.log(error)
})})