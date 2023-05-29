export default defineEventHandler(async (e) => {
  const data = await useStorage().getItem("redis:cart");

  return (
    data || [
      {
        id: "G2H1065",
        title: "Вытяжное устройство G2H",
        description:
          "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        imgUrl: "/images/g2h.png",
        price: 12644,
        quantity: 1,
      },
      {
        id: "BXC1065",
        title: "Вытяжное устройство BXC",
        description:
          "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        imgUrl: "/images/bxc.png",
        price: 12644,
        quantity: 2,
      },
      {
        id: "GHN1065",
        title: "Вытяжное устройство GHN",
        description:
          "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        imgUrl: "/images/ghn.png",
        price: 12644,
        quantity: 1,
      },
    ]
  );
});
