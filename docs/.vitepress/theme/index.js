import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.mixin({
      mounted() {
        this.initLightbox()
      },
      updated() {
        this.initLightbox()
      },
      methods: {
        initLightbox() {
          if (typeof window === 'undefined') return
          
          const overlay = document.getElementById('image-lightbox-overlay')
          if (!overlay) {
            const div = document.createElement('div')
            div.id = 'image-lightbox-overlay'
            div.className = 'image-lightbox-overlay'
            div.innerHTML = `
              <button class="image-lightbox-close">&times;</button>
              <img class="image-lightbox-content" src="" alt="">
              <span class="image-lightbox-caption"></span>
            `
            document.body.appendChild(div)
            
            div.addEventListener('click', (e) => {
              if (e.target === div || e.target.classList.contains('image-lightbox-close')) {
                div.classList.remove('active')
              }
            })
            
            document.addEventListener('keydown', (e) => {
              if (e.key === 'Escape' && div.classList.contains('active')) {
                div.classList.remove('active')
              }
            })
          }
          
          document.querySelectorAll('img').forEach(img => {
            if (!img.hasAttribute('data-lightbox')) {
              img.setAttribute('data-lightbox', 'true')
            }
            img.removeEventListener('click', this.openLightbox)
            img.addEventListener('click', (e) => this.openLightbox(e))
          })
        },
        openLightbox(e) {
          const img = e.target
          const overlay = document.getElementById('image-lightbox-overlay')
          const content = overlay.querySelector('.image-lightbox-content')
          const caption = overlay.querySelector('.image-lightbox-caption')
          
          content.src = img.src
          content.alt = img.alt
          caption.textContent = img.alt || ''
          
          overlay.classList.add('active')
        }
      }
    })
  }
}