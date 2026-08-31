# React-useEffect-CustomEventApp

Reactの `useEffect` を使って、カスタムイベントの監視・発火・クリーンアップを実装する練習用アプリです。

## 📌 概要

`window` にカスタムイベント `custom-event` のイベントリスナーを登録し、イベントが発火されたときにハンドラ関数を実行します。

「イベント発火」ボタンをクリックするとカスタムイベントが発火し、受信した回数を画面に表示します。

コンポーネントがアンマウントされた際には、`useEffect` のクリーンアップによってイベントリスナーを解除します。

## 🛠 使用技術

* React
* TypeScript
* Vite
* Tailwind CSS
* useState
* useEffect
* Custom Event
* addEventListener
* removeEventListener
* dispatchEvent

## 📂 コンポーネント構成

```text
src/
├── components/
│   ├── HandleCustomEvent.tsx
│   └── DisplayEventStatus.tsx
├── App.tsx
└── main.tsx
```

### HandleCustomEvent.tsx

カスタムイベントの監視処理を担当します。

* `useEffect` でイベントリスナーを登録
* `custom-event` を監視
* Propsで受け取ったハンドラ関数を実行
* クリーンアップでイベントリスナーを解除
* イベント受信回数を管理

### DisplayEventStatus.tsx

カスタムイベントの監視状態や受信回数を画面に表示します。

## 🔄 処理の流れ

```text
コンポーネントマウント
        ↓
addEventListenerでイベント登録
        ↓
「イベント発火」ボタンをクリック
        ↓
dispatchEventでcustom-eventを発火
        ↓
イベントリスナーがイベントを検知
        ↓
ハンドラ関数を実行
        ↓
受信回数を更新
        ↓
画面を再レンダリング
        ↓
コンポーネントアンマウント
        ↓
removeEventListenerでリスナー解除
```

## 📡 カスタムイベント

イベントの発火には `dispatchEvent` を使用します。

```tsx
window.dispatchEvent(new Event("custom-event"));
```

イベントの監視には `addEventListener` を使用します。

```tsx
window.addEventListener("custom-event", handler);
```

登録したイベントリスナーは、コンポーネントのアンマウント時に解除します。

```tsx
return () => {
  window.removeEventListener("custom-event", handler);
};
```

## 🧹 useEffectのクリーンアップ

`addEventListener` で登録したイベントリスナーを、コンポーネントが不要になったタイミングで解除します。

```tsx
useEffect(() => {
  window.addEventListener("custom-event", handler);

  return () => {
    window.removeEventListener("custom-event", handler);
  };
}, [handler]);
```

イベントリスナーを解除することで、不要なリスナーが残り続けることを防ぎます。

## 🎯 学習ポイント

* `useEffect` による副作用処理
* `useEffect` のクリーンアップ
* `addEventListener` によるイベント監視
* `removeEventListener` によるイベント解除
* `dispatchEvent` によるカスタムイベントの発火
* Propsによるハンドラ関数の受け渡し
* `useState` によるイベント受信回数の管理
* コンポーネント分割

## 🚀 起動方法

```bash
npm install
npm run dev
```

ブラウザでアプリを開き、「イベント発火」ボタンをクリックすると、カスタムイベントが発火され、受信回数が更新されます。
