package io.arbaaz.api.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import io.arbaaz.api.model.Topic;
import io.arbaaz.api.service.TopicService;

@RestController
public class TopicController {
	
	@Autowired
	private TopicService topicService;
	
	@GetMapping("/topics")
	public List<Topic> getAllTopics() {
		return topicService.getAllTopics();
	}

	@GetMapping("/topics/{id}")
	public Optional<Topic> getTopic(@PathVariable String id) {
		return topicService.getTopic(id);
	}
	
	
	
	@PostMapping("/topics")
	public Topic addTopic(@RequestBody Topic topic) {
		return topicService.addTopic(topic);
		
	}
	
	@PutMapping("/topics/{id}")
	public Topic updateTopic(@PathVariable String id,@RequestBody Topic topic) {
		return topicService.updateTopic(id, topic);
		
	}
	
	@DeleteMapping("/topics/{id}")
	public void deleteTopic(@PathVariable String id) {
		 topicService.deleteTopic(id);
	}
	
}
