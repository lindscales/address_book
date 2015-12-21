var addressBook = angular.module('addressBook');

addressBook.service('ContactService', function($http) {

  this.contacts = [];

  this.loadContacts = function() {
    return $http.get('http://localhost:3000/')
    .then(function(response) {
      return response.data.contacts;
    }, function() {
      console.log("Cannot load contacts.");
    });
  };

  this.addContact = function(contact) {
    return $http.post('http://localhost:3000/', {
      'contact': contact
    }).catch(function(err) {
      console.log("Could not add this contact.");
    });
  };

  this.updateContact = function(contact) {
    return $http.put('http://localhost:3000/' + contact.id, contact)
    .catch(function(err) {
      console.log("Could not update this contact.");
    });
  };

  this.deleteContact = function(contact) {
    return $http.delete('http://localhost:3000/' + contact.id)
    .catch(function(err) {
      console.log("Could not delete this contact.");
    });
  };

});