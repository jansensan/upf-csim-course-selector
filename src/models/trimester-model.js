export default class TrimesterModel {
  constructor(trimesterId) {
    this.trimesterId = trimesterId;
    this.courses = [];
  }

  getNumCredits() {
    return this.courses.length * 5;
  }
}
