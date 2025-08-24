// Script para manejar errores de videos de YouTube
document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.querySelector('.video-responsive iframe');
    const fallback = document.querySelector('.video-fallback');
    
    if (iframe && fallback) {
        // Ocultar el fallback inicialmente
        fallback.style.display = 'none';
        
        // Función para verificar si el video se cargó correctamente
        function checkVideoLoad() {
            try {
                // Intentar acceder al contenido del iframe
                if (iframe.contentWindow && iframe.contentWindow.location.href) {
                    // Si podemos acceder, el video probablemente se cargó
                    fallback.style.display = 'none';
                }
            } catch (e) {
                // Si hay un error de CORS, mostrar el fallback
                fallback.style.display = 'block';
            }
        }
        
        // Verificar después de un tiempo
        setTimeout(checkVideoLoad, 3000);
        
        // Verificar cuando el iframe se carga
        iframe.addEventListener('load', function() {
            setTimeout(checkVideoLoad, 1000);
        });
        
        // Verificar si hay errores
        iframe.addEventListener('error', function() {
            fallback.style.display = 'block';
        });
    }
});
