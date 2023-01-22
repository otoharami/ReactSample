import { ChangeEvent, useState } from "react";

export const App = () => {
  const [text, setText] = useState<string>("");

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  return (
    <div>
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
    </div>
  );
};
