const Home = () => {
  Section.innerHTML = "";
};
const HomeImg = () => {
  Section.innerHTML = "";
};
const Post = async (data) => {
  const response = await fetch("Default.aspx", {
    method: "POST",
    body: data,
  });

  if (response.ok) {
    return await response.text();
  } else {
    throw new Error("Error en la solicitud POST");
  }
};

window.onload = () => {
  Section.innerHTML = "";
  $n.init();
};
