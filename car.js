document.getElementById('carousel-arrow-next').addEventListener('click',carouselSwipe,false);
document.getElementById('carousel-arrow-prev').addEventListener('click',carouselSwipe,false);


function carouselSwipe() {
	
    
    var currentImg = document.getElementsByClassName('carousel-img-displayed')[0].id.substring(9);
	var newImg = parseInt(currentImg);
    
	if (this.id == 'carousel-arrow-next') {
        newImg++;
        if (newImg >= document.getElementsByClassName('carousel-img').length) {
            newImg = 0;
        }
	} else if (this.id == 'carousel-arrow-prev') {
        newImg--;
        if (newImg<0) {
            newImg = document.getElementsByClassName('carousel-img').length-1;
        }
    }
    
    document.getElementById('carousel-'+currentImg).className = 'carousel-img carousel-img-hidden';
	
    var displayedCarousel = document.getElementById('carousel-'+newImg);
	displayedCarousel.className = 'carousel-img carousel-img-hidden';
	setTimeout(function() {
		displayedCarousel.className = 'carousel-img carousel-img-displayed';
	},20);
    
	setTimeout(function() {
		document.getElementById('carousel-'+currentImg).className = 'carousel-img carousel-img-noDisplay';
	},520);
    
}