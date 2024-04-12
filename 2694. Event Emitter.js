class EventEmitter {
  subscribe(eventName, callback) {
    if (!(eventName in this)) {
      this[eventName] = [];
    }
    this[eventName].push(callback);
    return {
      unsubscribe: () => {
        this[eventName] = this[eventName].filter((fn) => fn != callback);
        return undefined;
      },
    };
  }

  emit(eventName, args = []) {
    let result = [];
    if (!(eventName in this)) {
      return result;
    } else {
      for (let i = 0; i < this[eventName].length; i++) {
        result.push(this[eventName][i](...args));
      }
    }
    return result;
  }
}
