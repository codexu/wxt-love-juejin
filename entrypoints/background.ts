export default defineBackground(() => {
  const count = storage.defineItem<number>("local:count", {
    defaultValue: 0,
  });

  setInterval(async () => {
    const _count = await count.getValue();
    console.log(_count);
    storage.setItem("local:count", _count + 1);
  }, 1000);
});
