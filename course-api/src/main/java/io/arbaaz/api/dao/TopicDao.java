package io.arbaaz.api.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import io.arbaaz.api.model.Topic;

public interface TopicDao extends JpaRepository<Topic, String>{

	
	
}
