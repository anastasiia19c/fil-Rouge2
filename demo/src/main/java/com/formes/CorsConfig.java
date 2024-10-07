package com.formes;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Autorise tous les endpoints
                .allowedOrigins("http://localhost:4200") // Autorise les requêtes venant du frontend Angular
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Autorise les méthodes HTTP
                .allowedHeaders("*") // Autorise tous les en-têtes
                .allowCredentials(true); // Autorise l'envoi de cookies si nécessaire
    }
}
