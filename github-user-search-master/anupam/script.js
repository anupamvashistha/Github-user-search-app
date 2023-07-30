var username = "octocat";
fetch(`https://api.github.com/users/${username}`)
  .then((response) => response.json())
  .then((data) => generateProfile(data));

function generateProfile(profile) {
  const pfp = document.querySelector("#pfp");
  const username = document.getElementById("username");
  const biod = document.querySelector("#bio");
  const rname = document.querySelector("#name");
  const joined = document.querySelector(".joined");
  const loc = document.querySelector(".location");
  const url = document.querySelector(".url");
  const twt = document.querySelector(".twitter");
  const org = document.querySelector(".org");
  const repos = document.querySelector(".repos");
  const followers = document.querySelector(".followers");
  const following = document.querySelector(".following");

  pfp.src = profile.avatar_url;
  username.innerHTML = `@${profile.login}`;
  rname.innerHTML = profile.name;
  if (profile.bio == null) biod.textContent = "This profile has no bio";
  else biod.textContent = profile.bio;
  joined.innerHTML = profile.created_at.slice(0, 10);
  loc.textContent = profile.location;
  if (profile.blog == "") url.innerHTML = "Not available";
  else url.innerHTML = profile.blog;
  if (profile.twitter_username == null) twt.innerHTML = "Not available";
  else twt.innerHTML = profile.twitter_username;
  if (profile.company == null) org.innerHTML = "Not available";
  else org.innerHTML = profile.company;
  repos.innerHTML = profile.public_repos;
  followers.innerHTML = profile.followers;
  following.innerHTML = profile.following;
}

const fetchuser = async () => {
  const username = document.querySelector(".searchinput").value;
  const user = await fetch(`https://api.github.com/users/${username}`);
  const profile = await user.json();
  generateProfile(profile);
};
var n = 1;
function changetheme() {
  if (n % 2 == 1) {
    n++;
    document
      .querySelector(":root")
      .style.setProperty("--body-bg-color-dark", "#f6f8ff");
    document
      .querySelector(":root")
      .style.setProperty("--inner-bg-color-dark", "#fefefe");
    document
      .querySelector(":root")
      .style.setProperty("--logo-color-dark", "#222731");
    document
      .querySelector(":root")
      .style.setProperty("--secondry-text-color-dark", "#697c9a");
    document
      .querySelector(":root")
      .style.setProperty("--secondry-heading-color-dark", "#2b3442");
    document.querySelector(".modechange").src = "./images/icon-moon.svg";
    document.querySelector(".light").innerHTML = "DARK";
  } else {
    n++;
    document
      .querySelector(":root")
      .style.setProperty("--body-bg-color-dark", "#141d2f");
    document
      .querySelector(":root")
      .style.setProperty("--inner-bg-color-dark", "#1e2a47");
    document
      .querySelector(":root")
      .style.setProperty("--logo-color-dark", "#fff");
    document
      .querySelector(":root")
      .style.setProperty("--secondry-text-color-dark", "#fff");
    document
      .querySelector(":root")
      .style.setProperty("--secondry-heading-color-dark", "#fff");
    document.querySelector(".modechange").src = "./images/icon-sun.svg";
    document.querySelector(".light").innerHTML = "LIGHT";
  }
}
