function hello(name) {
    if (name) {
      let lowCase = name.toLowerCase()
      let newName = lowCase.charAt(0).toUpperCase() + lowCase.slice(1)
      return `Hello, ${newName}!`;
    } else {
      return `Hello, World!`
    }
  }