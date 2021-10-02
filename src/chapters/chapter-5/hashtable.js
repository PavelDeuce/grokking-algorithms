// eslint-disable-next-line func-names
const Hashtable = function (obj = {}) {
  let length = 0;

  this.items = ((object) => {
    const items = { ...object };
    length = Object.keys(object).length;
    return items;
  })(obj);

  this.set = (key, value) => {
    let previous;

    if (this.has(key)) {
      previous = this.items[key];
    } else {
      length += 1;
    }

    this.items[key] = value;
    return previous;
  };

  this.get = (key) => {
    return Object.hasOwnProperty.call(this.items, key) ? this.items[key] : undefined;
  };

  this.has = (key) => {
    return Object.hasOwnProperty.call(this.items, key);
  };

  this.remove = (key) => {
    if (this.has(key)) {
      const previous = this.items[key];
      length -= 1;
      delete this.items[key];
      return previous;
    }
    return undefined;
  };

  this.getKeys = () => {
    const keys = [];

    Object.keys(this.items).forEach((i) => {
      if (this.has(i)) keys.push(i);
    });

    return keys;
  };

  this.getValues = () => {
    const values = [];

    Object.keys(this.items).forEach((i) => {
      if (this.has(i)) values.push(this.items[i]);
    });

    return values;
  };

  this.each = (callback) => {
    Object.keys(this.items).forEach((i) => {
      if (this.has(i)) callback(i, this.items[i]);
    });
  };

  this.clear = () => {
    this.items = {};
    length = 0;
  };

  Object.defineProperty(this, 'length', {
    get() {
      return length;
    },
  });

  Object.defineProperty(this, 'keys', {
    get() {
      return this.getKeys();
    },
  });

  Object.defineProperty(this, 'values', {
    get() {
      return this.getValues();
    },
  });
};

export default Hashtable;
