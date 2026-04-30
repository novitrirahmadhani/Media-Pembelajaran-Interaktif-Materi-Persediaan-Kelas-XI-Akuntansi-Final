function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6AIV1s43Vs3":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="backsound.mp3";
audio.load();
audio.play();
audio.volume=0.5
}

