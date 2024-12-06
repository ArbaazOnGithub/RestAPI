package io.arbaaz.api.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.arbaaz.api.dao.TopicDao;
import io.arbaaz.api.model.Topic;

@Service
public class TopicService {

    @Autowired
    private TopicDao topicDao;

    // Get All Topics
    public List<Topic> getAllTopics() {
        return topicDao.findAll();
    }

    // Get a Single Topic
    public Optional<Topic> getTopic(String id) {
        return topicDao.findById(id);
    }

    // Add Topic
    public Topic addTopic(Topic topic) {
        return topicDao.save(topic);
    }

    // Update Topic
    public Topic updateTopic(String id, Topic topic) {
        Optional<Topic> existingTopic = topicDao.findById(id);
        if (existingTopic.isPresent()) {
            Topic updatedTopic = existingTopic.get();
            // Update relevant fields (e.g., name, description)
            updatedTopic.setId(topic.getId());
            updatedTopic.setName(topic.getName());
            updatedTopic.setDescpription(topic.getDescpription());
            // Save the updated topic
            return topicDao.save(updatedTopic);
        } else {
            throw new RuntimeException("Topic with id " + id + " not found");
        }
    }

    // Delete Topic
    public void deleteTopic(String id) {
        topicDao.deleteById(id);
    }
}