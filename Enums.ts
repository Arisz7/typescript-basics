enum Color {
  Red,
  White,
  Black,
}

enum Color {
  DarkRed = 1,
  SuperWhite,
  DarkBlack,
}

enum AnimalFlags {
  None = 0,
  HasClaws = 1 << 0,
}

// Here:
//-We used  |= to add flags, a combination of &= and -to clear a flag and | to combine flags

const enum Tristate {
  False,
  True,
  Unkown,
}

var lie = Tristate.False;
