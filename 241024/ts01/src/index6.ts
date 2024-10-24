interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move: () => void;
}


// Implements 뒤의 인터페이스 형식을 반드시 모두 실행!!
class Character implements CharacterInterface {
  constructor(public name:string, public moveSpeed: number) {}
  move() {
    console.log(`${this.moveSpeed}속도로 이동!`);
  }
}