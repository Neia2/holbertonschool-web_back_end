export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (new.target === Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    // Reference `this` to satisfy ESLint
    if (this instanceof Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
