package com.ruby.paper.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

   	@Override
   	public void addCorsMappings(CorsRegistry registry) {
   		registry.addMapping("/**")
   			.allowedOrigins("http://3.37.27.133:3000/", "http://localhost:3000/");
   	}
}

