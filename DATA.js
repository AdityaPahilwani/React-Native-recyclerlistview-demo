export const subItem = "subItem";
export const ITEM = "item";
export const innderData = "innderData";
export const temp = [
  {
    type: ITEM,
    uri:
      "https://cutewallpaper.org/21/arthur-morgan-wallpapers/Arthur-Morgan-Wallpapers-Wallpaper-Cave.jpg",
    title: "Aditya Pahilwani",
  },
  {
    type: ITEM,
    uri:
      "https://www.theindianwire.com/wp-content/uploads/2019/12/red-dead-redemption-2-xbox-one-4k-1-scaled.jpg",
    title: "Arthur Morgan",
  },
  {
    type: subItem,
    uri:
      "https://cdn.wccftech.com/wp-content/uploads/2020/02/49517766152_7ab6037ac1_k.jpg",
    title: "Ellie",
  },
  {
    type: ITEM,
    uri:
      "https://pixelz.cc/wp-content/uploads/edd/2018/08/shadow-of-the-tomb-raider-lara-croft-e3-uhd-4k-wallpaper.jpg",
    title: "Lara croft",
  },
  {
    type: ITEM,
    uri:
      "https://i.pinimg.com/564x/54/28/fa/5428faa764350002a9f54e469ed8385e.jpg",
    title: "Kratos",
  },
  {
    type: subItem,
    uri:
      "https://cdn.wccftech.com/wp-content/uploads/2020/02/49517766152_7ab6037ac1_k.jpg",
    title: "Ellie",
  },
];

let filterTemp = temp.filter((data) => {
  if (data.type === ITEM) {
    return { ...data };
  }
});

filterTemp = filterTemp.map((data) => {
  return { ...data, type: innderData };
});

const finalTemp = temp.map((data, index) => {
  if (data.type === subItem) {
    return {
      ...data,
      innerData: [...filterTemp],
    };
  }
  if (data.type === ITEM) {
    return { ...data };
  }
});
export const data = [
  ...finalTemp,
  ...finalTemp,
  ...finalTemp,
  ...finalTemp,
  ...finalTemp,
  ...finalTemp,
  ...finalTemp,
  ...finalTemp,
  ...finalTemp,
  ...finalTemp,
  ...finalTemp,
  ...finalTemp,
  ...finalTemp,
  ...finalTemp,
  ...finalTemp,
  ...finalTemp,
  ...finalTemp,
  ...finalTemp,
  ...finalTemp,
  ...finalTemp,
  ...finalTemp,
  ...finalTemp,
  ...finalTemp,
  ...finalTemp,
  ...finalTemp,
  ...finalTemp,
  ...finalTemp,
  ...finalTemp,
  ...finalTemp,
  ...finalTemp,
];
