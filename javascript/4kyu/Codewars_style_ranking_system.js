class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }

  //upgrade the rank of the user by 1 and by 2 if = -1 casue no rank 0
  incRank() {
    if (this.rank === 8) return this.rank;
    if (this.rank === -1) {
      this.rank += 2;
    } else {
      this.rank += 1;
    }
  }

  rankToIndex(rank) {
    return rank > 0 ? rank + 7 : rank + 8;
  }

  incProgress(kr) {
    if (kr === 0 || kr < -8 || kr > 8) {
      throw new Error("Invalid kata rank");
    }

    if (this.rank === 8) return; // plus de progression possible

    const d = this.rankToIndex(kr) - this.rankToIndex(this.rank);
    let points = 0;

    if (d === 0) points = 3;
    else if (d === -1) points = 1;
    else if (d > 0) points = 10 * d * d;
    // d <= -2 → points = 0, rien à ajouter

    this.progress += points;

    while (this.progress >= 100) {
      this.progress -= 100;
      this.incRank();
      if (this.rank === 8) {
        this.progress = 0;
        break;
      }
    }
  }
}

const user1 = new User();
console.log(user1.rank);
user1.incProgress(-4);
console.log(user1.rank);
