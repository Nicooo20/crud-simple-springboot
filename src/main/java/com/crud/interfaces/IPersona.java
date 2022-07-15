package com.crud.interfaces;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.crud.model.Persona;

@Repository
public interface IPersona extends CrudRepository<Persona, Integer> {
	

}
