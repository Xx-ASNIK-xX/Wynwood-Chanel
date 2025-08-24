// Script para forzar la visualización del video de YouTube
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Video de YouTube configurado correctamente');
    
    const iframe = document.querySelector('.video-responsive iframe');
    const fallback = document.querySelector('.video-fallback');
    
    if (iframe && fallback) {
        // Ocultar el fallback
        fallback.style.display = 'none';
        
        // Función para forzar la visualización
        function forceVideoDisplay() {
            // Forzar estilos CSS
            iframe.style.display = 'block';
            iframe.style.visibility = 'visible';
            iframe.style.opacity = '1';
            iframe.style.zIndex = '9999';
            
            // Forzar dimensiones
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.minHeight = '315px';
            
            // Verificar si el iframe está realmente visible
            const rect = iframe.getBoundingClientRect();
            
            if (rect.width > 0 && rect.height > 0) {
                fallback.style.display = 'none';
            } else {
                fallback.style.display = 'block';
            }
        }
        
        // Ejecutar inmediatamente
        forceVideoDisplay();
        
        // Ejecutar después de un tiempo
        setTimeout(forceVideoDisplay, 1000);
        setTimeout(forceVideoDisplay, 3000);
        
        // Ejecutar cuando se redimensiona la ventana
        window.addEventListener('resize', forceVideoDisplay);
        
        // Verificar cada 5 segundos (en lugar de cada 2)
        setInterval(forceVideoDisplay, 5000);
        
        // Cuando el iframe se carga
        iframe.addEventListener('load', function() {
            console.log('✅ Video de YouTube cargado exitosamente');
            setTimeout(forceVideoDisplay, 500);
        });
    }
});
