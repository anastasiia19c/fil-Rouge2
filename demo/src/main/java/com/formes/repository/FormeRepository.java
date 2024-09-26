package com.formes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.formes.model.Forme;

public interface FormeRepository extends JpaRepository<Forme, Long> {
}
