import {Howl} from 'howler';

const types = ['start', 'fail', 'cash', 'strike', 'sucess'];
const sounds : any = {};

for (let name of types) {
  sounds[name] = new Howl({ src: [`/sounds/${name}.wav`] });
}

export function playAudio(name: string) {
  const sound = sounds[name];
  if (sound) sound.play();
}