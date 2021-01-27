var events= {
    publish: function(eventName, obiect) {
        console.log(eventName, obiect);
    }
}

class events1 {
    publish(eventName, object) {
        console.log(eventName, obiect);
    }
}

class events1 {
    constructor() {
        debugger;
    }
    publish(eventName, object) {
        console.log(eventName, obiect);
    }
}

class events1 {
    constructor(data) {
        var {age} = data;
        this.age= age;
        debugger;
    }
    publish(eventName, object) {
        console.log(eventName, obiect);
    }
}

var helpers = {
    guid: function() {
              return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
              var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
              return v.toString(16);
            });
          };
    }