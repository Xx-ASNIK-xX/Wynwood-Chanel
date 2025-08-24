// Script de depuración para videos de YouTube
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔍 Iniciando depuración del video...');
    
    const iframe = document.querySelector('.video-responsive iframe');
    const fallback = document.querySelector('.video-fallback');
    
    if (iframe) {
        console.log('✅ Iframe encontrado:', iframe);
        console.log('📍 URL del iframe:', iframe.src);
        console.log('📏 Dimensiones del iframe:', iframe.offsetWidth, 'x', iframe.offsetHeight);
        
        // Verificar si el iframe está visible
        const rect = iframe.getBoundingClientRect();
        console.log('📍 Posición del iframe:', rect);
        console.log('👁️ ¿Está visible?', rect.width > 0 && rect.height > 0);
        
        // Verificar estilos CSS
        const styles = window.getComputedStyle(iframe);
        console.log('🎨 Display del iframe:', styles.display);
        console.log('🎨 Visibility del iframe:', styles.visibility);
        console.log('🎨 Opacity del iframe:', styles.opacity);
        
        // Verificar el contenedor
        const container = iframe.parentElement;
        console.log('📦 Contenedor del iframe:', container);
        console.log('📏 Dimensiones del contenedor:', container.offsetWidth, 'x', container.offsetHeight);
        
        // Verificar estilos del contenedor
        const containerStyles = window.getComputedStyle(container);
        console.log('🎨 Display del contenedor:', containerStyles.display);
        console.log('🎨 Position del contenedor:', containerStyles.position);
        console.log('🎨 Overflow del contenedor:', containerStyles.overflow);
        
    } else {
        console.error('❌ No se encontró el iframe');
    }
    
    if (fallback) {
        console.log('✅ Fallback encontrado:', fallback);
        console.log('👁️ Estado del fallback:', fallback.style.display);
    } else {
        console.error('❌ No se encontró el fallback');
    }
    
    // Verificar si hay errores de consola
    window.addEventListener('error', function(e) {
        console.error('🚨 Error detectado:', e.error);
    });
    
    // Verificar si el iframe se carga
    iframe.addEventListener('load', function() {
        console.log('✅ Iframe cargado exitosamente');
        setTimeout(function() {
            try {
                if (iframe.contentWindow && iframe.contentWindow.location.href) {
                    console.log('✅ Contenido del iframe accesible');
                } else {
                    console.log('⚠️ Contenido del iframe no accesible (CORS)');
                }
            } catch (e) {
                console.log('⚠️ Error al acceder al contenido del iframe:', e.message);
            }
        }, 2000);
    });
    
    iframe.addEventListener('error', function(e) {
        console.error('❌ Error en el iframe:', e);
    });
    
    // Verificar después de un tiempo
    setTimeout(function() {
        console.log('⏰ Verificación tardía...');
        if (iframe.contentDocument) {
            console.log('✅ Documento del iframe disponible');
        } else {
            console.log('⚠️ Documento del iframe no disponible');
        }
    }, 5000);
});
