let boxMenu = document.querySelector('.box-menu')
let navbarSupported = document.querySelector('#navbarSupportedContent')
let closeMenu =document.querySelector('#close-menu')
let about = document.querySelector('.about')
let aboutTop = about.offsetTop - 300 
let skills = document.querySelector('.skills')
let skillsItme = document.querySelectorAll('.item div')
let skillsTop  = skills.offsetTop - 300
let projects = document.querySelector('.projects')
let projectsTop  = projects.offsetTop - 300
let contact = document.querySelector('.contact')
let contactTop = contact.offsetTop - 300


$(window).scroll(() => {
    let windowScroll = $(window).scrollTop()
    if(windowScroll > 50)
    {
         $("#header").addClass("header_2")
         $("#scroll_top").addClass("active")
    }
    else
    {
        $("#header").removeClass("header_2")
        $("#scroll_top").removeClass("active")
    }
});
$("#scroll_top").click(function(){
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
})
navbarSupported.addEventListener('click' , () => {
    boxMenu.classList.add('active')
})
closeMenu.addEventListener('click' , () => {
    boxMenu.classList.remove('active')
})
$('.home2').click(() => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    $('.home2').addClass('active')
    $('.about2').removeClass('active')
    $('.projects2').removeClass('active')
    $('.contact2').removeClass('active')
})
$('.about2').click(() => {
    window.scroll({
        top: aboutTop + 300,
        left: 0,
        behavior: 'smooth'
    });
    $('.home2').removeClass('active')
    $('.about2').addClass('active')
    $('.skills2').removeClass('active')
    $('.projects2').removeClass('active')
    $('.contact2').removeClass('active')
})

window.onscroll = () => {
    if(window.scrollY >= skillsTop) {
        skillsItme.forEach((item) => {
            item.style.width = item.dataset.width
        })
    }
}
$('.skills2').click(() => {
    window.scroll({
        top: skillsTop + 200,
        left: 0,
        behavior: 'smooth'
    });
    $('.home2').removeClass('active')
    $('.about2').removeClass('active')
    $('.skills2').addClass('active')
    $('.projects2').removeClass('active')
    $('.contact2').removeClass('active')
})
$('.projects2').click(() => {
    window.scroll({
        top: projectsTop + 200,
        left: 0,
        behavior: 'smooth'
    });
    $('.home2').removeClass('active')
    $('.about2').removeClass('active')
    $('.skills2').removeClass('active')
    $('.projects2').addClass('active')
    $('.contact2').removeClass('active')
})
$('.contact2').click(() => {
    window.scroll({
        top: contactTop + 650,
        left: 0,
        behavior: 'smooth'
    });
    $('.home2').removeClass('active')
    $('.about2').removeClass('active')
    $('.skills2').removeClass('active')
    $('.projects2').removeClass('active')
    $('.contact2').addClass('active')
})
$(window).scroll(() => {    
    if (window.scrollY < aboutTop){
        $('.home2').addClass('active')
        $('.about2').removeClass('active')
        $('.skills2').removeClass('active')
        $('.projects2').removeClass('active')
        $('.contact2').removeClass('active')
    } if(window.scrollY >= aboutTop){
        $('.home2').removeClass('active')
        $('.about2').addClass('active')
        $('.skills2').removeClass('active')
        $('.projects2').removeClass('active')
        $('.contact2').removeClass('active')
    } if(window.scrollY >= skillsTop){
        $('.home2').removeClass('active')
        $('.about2').removeClass('active')
        $('.skills2').addClass('active')
        $('.projects2').removeClass('active')
        $('.contact2').removeClass('active')
    } if(window.scrollY >= projectsTop){
        $('.home2').removeClass('active')
        $('.about2').removeClass('active')
        $('.skills2').removeClass('active')
        $('.projects2').addClass('active')
        $('.contact2').removeClass('active')
    } if(window.scrollY >= contactTop){
        $('.home2').removeClass('active')
        $('.about2').removeClass('active')
        $('.skills2').removeClass('active')
        $('.projects2').removeClass('active')
        $('.contact2').addClass('active')
    }
});
$('.projects .owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:7000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})
let icon1 = document.querySelector('#icon-1')
icon1.addEventListener('click' , () => {
    $('#ul-1').slideToggle(500)
    icon1.classList.toggle('active')
})
let icon2 = document.querySelector('#icon-2')
icon2.addEventListener('click' , () => {
    $('#ul-2').slideToggle(500)
    icon2.classList.toggle('active')
})
let contactRelod = document.querySelector('.contact-relod')
function sendEmail() {
    let params = {
        name: document.getElementById('name').value ,
        email: document.getElementById('email').value ,
        message: document.getElementById('message').value ,
        phone: document.getElementById('phone').value
    }
    const serviceId = 'service_uuy181k';
    const templateId = 'template_b7cbr4p'
    contactRelod.classList.add('active')
    emailjs.send(serviceId,templateId,params)
    .then(
        res => {
            if(res.status == 200){
                setTimeout(() => {
                    contactRelod.classList.remove('active')
                }, 1500);
            }
        }
    )
    .catch(err=>console.log(err))
}










