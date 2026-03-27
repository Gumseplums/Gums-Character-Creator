const Buttons        = document.querySelectorAll("button");
const BackBtn        = document.getElementById("GoBackButton");
const SaveBtn        = document.getElementById("SaveButton")
const DwlAllCanvas   = document.getElementById("DownloadAllCanvas")
const ItemSettingBtn = document.getElementById("ItemSettingsButton");
let CurrentPage      = document.getElementById("MainPage");   
let DestinationPage;                                      
let ParentPageTree  = [];

Buttons.forEach(Buttons => {
  Buttons.addEventListener("click", () => {   
    if (Buttons == BackBtn) {                         
      if (ParentPageTree[0] == null) {} else {            
        ParentPageTree[0].style.display="Inline-block"    
        CurrentPage.style.display="none"                  
        CurrentPage = ParentPageTree[0];                  
        ParentPageTree.shift();                           
      }
    } else if (Buttons == SaveBtn) {
      console.log("TRYING TO SAVE AN IMAGE HUH??")
      SaveImg()
    } else if (Buttons == DwlAllCanvas) {
      SaveAllImg()
    } else {
        CurrentPage.style.display="none"                                        
        let DestinationPageString = Buttons.getAttribute("data-GoToPage");      
        DestinationPage = document.getElementById(DestinationPageString);     
        ParentPageTree.unshift(CurrentPage);                                  
        CurrentPage = DestinationPage;                                        
        CurrentPage.style.display="Inline-block";                             
        DestinationPage = null;                               
    }
  })
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let IndivdualAssetButton = [];
let View           = "FrontView";
let Catergory      = "variable is undefined";
let ItemTypeString = "variable is undefined";
let SpecificAsset  = "variable is undefined";

let ItemTypeVariable = "not defined dudddde";

const ButtonDivParent    = document.getElementById("ButtonDivParent");
const ButtonDiv          = document.getElementById("ButtonsDiv");
const AssetDiv           = document.getElementById("AssetButtonDiv");
const MainWindow         = document.getElementById("MainWindow");
const ImageTest = document.getElementById("ImageTest");
const BodyLimbs    = document.getElementById("BodyLimbsDiv");
const AssetButtons = BodyLimbs.querySelectorAll("button");


CanvasHeight = 800;
CanvasWidth  = 800;

const EveryCanvas   = document.getElementById("EverythingCanvas");
const Canvas        = EveryCanvas.getContext("2d");
EveryCanvas.height  = CanvasHeight;
EveryCanvas.width   = CanvasWidth;

const HeadCanvas   = document.getElementById("HeadCanvas");
const Head         = HeadCanvas.getContext("2d");
HeadCanvas.height  = CanvasHeight;
HeadCanvas.width   = CanvasWidth;

const NeckCanvas   = document.getElementById("NeckCanvas");
const Neck         = NeckCanvas.getContext("2d");
NeckCanvas.height  = CanvasHeight;
NeckCanvas.width   = CanvasWidth;

const TorsoCanvas  = document.getElementById("TorsoCanvas");
const Torso        = TorsoCanvas.getContext("2d");
TorsoCanvas.height = CanvasHeight;
TorsoCanvas.width  = CanvasWidth;

const LeftShoulderCanvas   = document.getElementById("LeftShoulderCanvas");
const LeftShoulder         = LeftShoulderCanvas.getContext("2d");
LeftShoulderCanvas.height  = CanvasHeight;
LeftShoulderCanvas.width   = CanvasWidth;

const RightShoulderCanvas   = document.getElementById("RightShoulderCanvas");
const RightShoulder         = RightShoulderCanvas.getContext("2d");
RightShoulderCanvas.height  = CanvasHeight;
RightShoulderCanvas.width   = CanvasWidth;

const LeftArmCanvas   = document.getElementById("LeftArmCanvas");
const LeftArm         = LeftArmCanvas.getContext("2d");
LeftArmCanvas.height  = CanvasHeight;
LeftArmCanvas.width   = CanvasWidth;

const RightArmCanvas   = document.getElementById("RightArmCanvas");
const RightArm         = RightArmCanvas.getContext("2d");
RightArmCanvas.height  = CanvasHeight;
RightArmCanvas.width   = CanvasWidth;

const LeftHandCanvas   = document.getElementById("LeftHandCanvas");
const LeftHand         = LeftHandCanvas.getContext("2d");
LeftHandCanvas.height  = CanvasHeight;
LeftHandCanvas.width   = CanvasWidth;

const RightHandCanvas   = document.getElementById("RightHandCanvas");
const RightHand         = RightHandCanvas.getContext("2d");
RightHandCanvas.height  = CanvasHeight;
RightHandCanvas.width   = CanvasWidth;

const LeftThighCanvas   = document.getElementById("LeftThighCanvas");
const LeftThigh         = LeftThighCanvas.getContext("2d");
LeftThighCanvas.height  = CanvasHeight;
LeftThighCanvas.width   = CanvasWidth;

const RightThighCanvas   = document.getElementById("RightThighCanvas");
const RightThigh         = RightThighCanvas.getContext("2d");
RightThighCanvas.height  = CanvasHeight;
RightThighCanvas.width   = CanvasWidth;

const LeftLegCanvas   = document.getElementById("LeftLegCanvas");
const LeftLeg         = LeftLegCanvas.getContext("2d");
LeftLegCanvas.height  = CanvasHeight;
LeftLegCanvas.width   = CanvasWidth;

const RightLegCanvas   = document.getElementById("RightLegCanvas");
const RightLeg         = RightLegCanvas.getContext("2d");
RightLegCanvas.height  = CanvasHeight;
RightLegCanvas.width   = CanvasWidth;

const LeftFootCanvas   = document.getElementById("LeftFootCanvas");
const LeftFoot         = LeftFootCanvas.getContext("2d");
LeftFootCanvas.height  = CanvasHeight;
LeftFootCanvas.width   = CanvasWidth;

const RightFootCanvas   = document.getElementById("RightFootCanvas");
const RightFoot         = RightFootCanvas.getContext("2d");
RightFootCanvas.height  = CanvasHeight;
RightFootCanvas.width   = CanvasWidth;

const LeftEarCanvas   = document.getElementById("LeftEarCanvas");
const LeftEar         = LeftEarCanvas.getContext("2d");
LeftEarCanvas.height  = CanvasHeight;
LeftEarCanvas.width   = CanvasWidth;

const RightEarCanvas   = document.getElementById("RightEarCanvas");
const RightEar         = RightEarCanvas.getContext("2d");
RightEarCanvas.height  = CanvasHeight;
RightEarCanvas.width   = CanvasWidth;

let AssetYcoords       = document.getElementById("Ycoords")
let AssetXcoords       = document.getElementById("Xcoords")
let AssetYscale        = document.getElementById("Yscale")
let AssetXscale        = document.getElementById("Xscale")
let AssetSpinRotation  = document.getElementById("SpinRotation");
let AssetLineWidth     = document.getElementById("ThicknessInput");
let AssetStrokeColour  = document.getElementById("OutlineColour");
let AssetDashInput     = document.getElementById("DashedLines");
let AssetFill          = document.getElementById("BackgroundColour");

let Ycoords      = AssetYcoords.value
let Xcoords      = AssetXcoords.value
let Yscale       = AssetYscale.value
let Xscale       = AssetXscale.value
let SpinRotation = AssetSpinRotation.value
let LineWidth    = AssetLineWidth.value
let StrokeColour = AssetStrokeColour.value
let DashInput    = AssetDashInput.value
let Fill         = AssetFill.value

///////////
// Here u can put the default "stats" for each asset
let HeadYcoords = 400;
let HeadXcoords = 50;
let HeadYscale  = 0.3;
let HeadXscale  = 0.3;
let HeadSpinRotation = 0;
let HeadLineWidth = 20;
let HeadStrokeColour = "#000000"
let HeadDashInput = "0";
let HeadFill = "#ffffff"
let HeadPath = null;

let NeckYcoords = 433;
let NeckXcoords = 170;
let NeckYscale  = 0.3;
let NeckXscale  = 0.3;
let NeckSpinRotation = 0;
let NeckLineWidth = 20;
let NeckStrokeColour = "#000000"
let NeckDashInput = "0";
let NeckFill = "#ffffff"
let NeckPath = null;

let TorsoYcoords = 403;
let TorsoXcoords = 198;
let TorsoYscale  = 0.3;
let TorsoXscale  = 0.3;
let TorsoSpinRotation = 0;
let TorsoLineWidth = 20;
let TorsoStrokeColour = "#000000"
let TorsoDashInput = "0";
let TorsoFill = "#ffffff"
let TorsoPath = null;

let LeftShoulderYcoords = 400;
let LeftShoulderXcoords = 50;
let LeftShoulderYscale  = 0.3;
let LeftShoulderXscale  = 0.3;
let LeftShoulderSpinRotation = 0;
let LeftShoulderLineWidth = 20;
let LeftShoulderStrokeColour = "#000000"
let LeftShoulderDashInput = "0";
let LeftShoulderFill = "#ffffff"
let LeftShoulderPath = null;

let RightShoulderYcoords = 400;
let RightShoulderXcoords = 50;
let RightShoulderYscale  = 0.3;
let RightShoulderXscale  = 0.3;
let RightShoulderSpinRotation = 0;
let RightShoulderLineWidth = 20;
let RightShoulderStrokeColour = "#000000"
let RightShoulderDashInput = "0";
let RightShoulderFill = "#ffffff"
let RightShoulderPath = null;
//////////
AssetButtons.forEach(AssetButtons => {
  AssetButtons.addEventListener("click", () => {
        Catergory = "BodyLimbs";
        ItemTypeString  = AssetButtons.getAttribute("title")

        if (ItemTypeString == "Head") {
          ItemTypeVariable = Head;

        } else if (ItemTypeString == "Neck") {
          ItemTypeVariable = Neck;   

        } else if (ItemTypeString == "Torso") {
          ItemTypeVariable = Torso;

        } // ADD MORE ITEMTYPES WHEN NEEDED
      LoadAssets();
  })
});

async function LoadAssets() {
  let response = await fetch("CharacterCreator.json")   
  let assets = await response.json();                   
  let AssetArray = (assets[View][Catergory][ItemTypeString]);
  AddAssetsToDiv(AssetArray);

  console.log("Load Assets Done");
  
};


function AddAssetsToDiv (AssetLocation){

    AssetDiv.innerHTML="";  
    let ParaText = document.createElement("p")
    ParaText.classList.add("PText");
    AssetDiv.appendChild(ParaText); 
    const node = document.createTextNode(" This is AssetButtonDiv . Here I will have all the assets buttons spawn");
    ParaText.appendChild(node);

        if (ItemTypeString == "Head") {     //Gotta make this shorter
          console.log("This is Head")
          AssetYcoords.value = HeadYcoords;
          Ycoords = AssetYcoords.value;
          AssetXcoords.value = HeadXcoords;
          Xcoords = AssetXcoords.value;
          AssetYscale.value = HeadYscale;
          Yscale = AssetYscale.value;
          AssetXscale.value = HeadXscale;
          Xscale = AssetXscale.value;
          AssetSpinRotation.value = HeadSpinRotation;
          SpinRotation = AssetSpinRotation.value;
          AssetLineWidth.value = HeadLineWidth;
          LineWidth = AssetLineWidth.value;
          AssetStrokeColour.value = HeadStrokeColour;
          StrokeColour = AssetStrokeColour.value;
          AssetDashInput.value = HeadDashInput;
          DashInput = AssetDashInput.value;
          AssetFill.value = HeadFill;
          Fill = AssetFill.value;
        } else if (ItemTypeString == "Neck") {
          console.log("This is Neck")
          AssetYcoords.value = NeckYcoords;
          Ycoords = AssetYcoords.value;
          AssetXcoords.value = NeckXcoords;
          Xcoords = AssetXcoords.value;
          AssetYscale.value = NeckYscale;
          Yscale = AssetYscale.value;
          AssetXscale.value = NeckXscale;
          Xscale = AssetXscale.value;
          AssetSpinRotation.value = NeckSpinRotation;
          SpinRotation = AssetSpinRotation.value;
          AssetLineWidth.value = NeckLineWidth;
          LineWidth = AssetLineWidth.value;
          AssetStrokeColour.value = NeckStrokeColour;
          StrokeColour = AssetStrokeColour.value;
          AssetDashInput.value = NeckDashInput;
          DashInput = AssetDashInput.value;
          AssetFill.value = NeckFill;
          Fill = AssetFill.value;
        } else if (ItemTypeString == "Torso") {
          console.log("This is Torso")
          AssetYcoords.value = TorsoYcoords;
          Ycoords = AssetYcoords.value;
          AssetXcoords.value = TorsoXcoords;
          Xcoords = AssetXcoords.value;
          AssetYscale.value = TorsoYscale;
          Yscale = AssetYscale.value;
          AssetXscale.value = TorsoXscale;
          Xscale = AssetXscale.value;
          AssetSpinRotation.value = TorsoSpinRotation;
          SpinRotation = AssetSpinRotation.value;
          AssetLineWidth.value = TorsoLineWidth;
          LineWidth = AssetLineWidth.value;
          AssetStrokeColour.value = TorsoStrokeColour;
          StrokeColour = AssetStrokeColour.value;
          AssetDashInput.value = TorsoDashInput;
          DashInput = AssetDashInput.value;
          AssetFill.value = TorsoFill;
          Fill = AssetFill.value;
        } else if (ItemTypeString == "LeftShoulder") {
          console.log("This is LeftShoulder")
          AssetYcoords.value = LeftShoulderYcoords;
          Ycoords = AssetYcoords.value;
          AssetXcoords.value = LeftShoulderXcoords;
          Xcoords = AssetXcoords.value;
          AssetYscale.value = LeftShoulderYscale;
          Yscale = AssetYscale.value;
          AssetXscale.value = LeftShoulderXscale;
          Xscale = AssetXscale.value;
          AssetSpinRotation.value = LeftShoulderSpinRotation;
          SpinRotation = AssetSpinRotation.value;
          AssetLineWidth.value = LeftShoulderLineWidth;
          LineWidth = AssetLineWidth.value;
          AssetStrokeColour.value = LeftShoulderStrokeColour;
          StrokeColour = AssetStrokeColour.value;
          AssetDashInput.value = LeftShoulderDashInput;
          DashInput = AssetDashInput.value;
          AssetFill.value = LeftShoulderFill;
          Fill = AssetFill.value;
        } else if (ItemTypeString == "RightShoulder") {
          console.log("This is RightShoulder")
          AssetYcoords.value = RightShoulderYcoords;
          Ycoords = AssetYcoords.value;
          AssetXcoords.value = RightShoulderXcoords;
          Xcoords = AssetXcoords.value;
          AssetYscale.value = RightShoulderYscale;
          Yscale = AssetYscale.value;
          AssetXscale.value = RightShoulderXscale;
          Xscale = AssetXscale.value;
          AssetSpinRotation.value = RightShoulderSpinRotation;
          SpinRotation = AssetSpinRotation.value;
          AssetLineWidth.value = RightShoulderLineWidth;
          LineWidth = AssetLineWidth.value;
          AssetStrokeColour.value = RightShoulderStrokeColour;
          StrokeColour = AssetStrokeColour.value;
          AssetDashInput.value = RightShoulderDashInput;
          DashInput = AssetDashInput.value;
          AssetFill.value = RightShoulderFill;
          Fill = AssetFill.value;
        }

      AssetLocation.forEach(Asset => {    
        AssetFilePath = Asset.FilePath;                    
        AssetFilePathURL = ("url('"+AssetFilePath+"')");

        let Btn  = document.createElement("button"); 
        AssetDiv.appendChild(Btn);                  
        Btn.classList.add("Button");
        Btn.classList.add(ItemTypeString);
        Btn.style.backgroundImage = [AssetFilePathURL];   
        Btn.title = Asset.Name;
              Btn.addEventListener("click", () => {
                Path = Asset.d;

                if (ItemTypeVariable == Head) {
                  HeadPath = Path;
                } else if (ItemTypeVariable == Neck) {
                  NeckPath = Path;
                } else if (ItemTypeVariable == Torso) {
                  TorsoPath = Path;
                }

                DrawOnCanvas(Path, ItemTypeVariable)                          

           })
      }); 

    console.log("Add Assets To Div Done");  
};

// HAVE to make ALLLL this shorter. Either one function, or a few lines inside each function.

AssetYcoords.addEventListener("input", () => {
    if (ItemTypeString == "Head") {  
      console.log("This is Head")
      Ycoords = AssetYcoords.value;
      HeadYcoords = AssetYcoords.value;
      LatestPath = HeadPath;
      Latestctx  = Head;
    } else if (ItemTypeString == "Neck") {  
      console.log("This is Neck")
      Ycoords = AssetYcoords.value;
      NeckYcoords = AssetYcoords.value;
      LatestPath = NeckPath;
      Latestctx  = Neck;      
    } else if (ItemTypeString == "Torso") {  
      console.log("This is Torso")
      Ycoords = AssetYcoords.value;
      TorsoYcoords = AssetYcoords.value;
      LatestPath = TorsoPath;
      Latestctx  = Torso;
    }
    DrawOnCanvas(LatestPath, Latestctx)
})

AssetXcoords.addEventListener("input", () => {
    if (ItemTypeString == "Head") {  
      console.log("This is Head")
      Xcoords = AssetXcoords.value;
      HeadXcoords = AssetXcoords.value;
      LatestPath = HeadPath;
      Latestctx  = Head;
    } else if (ItemTypeString == "Neck") {  
      console.log("This is Neck")
      Xcoords = AssetXcoords.value;
      NeckXcoords = AssetXcoords.value;
      LatestPath = NeckPath;
      Latestctx  = Neck;      
    } else if (ItemTypeString == "Torso") {  
      console.log("This is Torso")
      Xcoords = AssetXcoords.value;
      TorsoXcoords = AssetXcoords.value;
      LatestPath = TorsoPath;
      Latestctx  = Torso;
    }
    DrawOnCanvas(LatestPath, Latestctx)
})

AssetYscale.addEventListener("input", () => {
    if (ItemTypeString == "Head") {  
      console.log("This is Head")
      Yscale = AssetYscale.value;
      HeadYscale = AssetYscale.value;
      LatestPath = HeadPath;
      Latestctx  = Head;
    } else if (ItemTypeString == "Neck") {  
      console.log("This is Neck")
      Yscale = AssetYscale.value;
      NeckYscale = AssetYscale.value;
      LatestPath = NeckPath;
      Latestctx  = Neck;      
    } else if (ItemTypeString == "Torso") {  
      console.log("This is Torso")
      Yscale = AssetYscale.value;
      TorsoYscale = AssetYscale.value;
      LatestPath = TorsoPath;
      Latestctx  = Torso;
    }
    DrawOnCanvas(LatestPath, Latestctx)
})

AssetXscale.addEventListener("input", () => {
    if (ItemTypeString == "Head") {  
      console.log("This is Head")
      Xscale = AssetXscale.value;
      HeadXscale = AssetXscale.value;
      LatestPath = HeadPath;
      Latestctx  = Head;
    } else if (ItemTypeString == "Neck") {  
      console.log("This is Neck")
      Xscale = AssetXscale.value;
      NeckXscale = AssetXscale.value;
      LatestPath = NeckPath;
      Latestctx  = Neck;      
    } else if (ItemTypeString == "Torso") {  
      console.log("This is Torso")
      Xscale = AssetXscale.value;
      TorsoXscale = AssetXscale.value;
      LatestPath = TorsoPath;
      Latestctx  = Torso;
    }
    DrawOnCanvas(LatestPath, Latestctx)
})

AssetSpinRotation.addEventListener("input", () => {
    if (ItemTypeString == "Head") {  
      console.log("This is Head")
      SpinRotation = AssetSpinRotation.value;
      HeadSpinRotation = AssetSpinRotation.value;
      LatestPath = HeadPath;
      Latestctx  = Head;
    } else if (ItemTypeString == "Neck") {  
      console.log("This is Neck")
      SpinRotation = AssetSpinRotation.value;
      NeckSpinRotation = AssetSpinRotation.value;
      LatestPath = NeckPath;
      Latestctx  = Neck;      
    } else if (ItemTypeString == "Torso") {  
      console.log("This is Torso")
      SpinRotation = AssetSpinRotation.value;
      TorsoSpinRotation = AssetSpinRotation.value;
      LatestPath = TorsoPath;
      Latestctx  = Torso;
    }
    DrawOnCanvas(LatestPath, Latestctx)
})

AssetLineWidth.addEventListener("input", () => {
    if (ItemTypeString == "Head") {  
      console.log("This is Head")
      LineWidth = AssetLineWidth.value;
      HeadLineWidth = AssetLineWidth.value;
      LatestPath = HeadPath;
      Latestctx  = Head;
    } else if (ItemTypeString == "Neck") {  
      console.log("This is Neck")
      LineWidth = AssetLineWidth.value;
      NeckLineWidth = AssetLineWidth.value;
      LatestPath = NeckPath;
      Latestctx  = Neck;      
    } else if (ItemTypeString == "Torso") {  
      console.log("This is Torso")
      LineWidth = AssetLineWidth.value;
      TorsoLineWidth = AssetLineWidth.value;
      LatestPath = TorsoPath;
      Latestctx  = Torso;
    }
    DrawOnCanvas(LatestPath, Latestctx)
})

AssetStrokeColour.addEventListener("input", () => {
    if (ItemTypeString == "Head") {  
      console.log("This is Head")
      StrokeColour = AssetStrokeColour.value;
      HeadStrokeColour = AssetStrokeColour.value;
      LatestPath = HeadPath;
      Latestctx  = Head;
    } else if (ItemTypeString == "Neck") {  
      console.log("This is Neck")
      StrokeColour = AssetStrokeColour.value;
      NeckStrokeColour = AssetStrokeColour.value;
      LatestPath = NeckPath;
      Latestctx  = Neck;      
    } else if (ItemTypeString == "Torso") {  
      console.log("This is Torso")
      StrokeColour = AssetStrokeColour.value;
      TorsoStrokeColour = AssetStrokeColour.value;
      LatestPath = TorsoPath;
      Latestctx  = Torso;
    }
    DrawOnCanvas(LatestPath, Latestctx)
})

AssetDashInput.addEventListener("input", () => {
    if (ItemTypeString == "Head") {  
      console.log("This is Head")
      DashInput = AssetDashInput.value;
      HeadDashInput = AssetDashInput.value;
      LatestPath = HeadPath;
      Latestctx  = Head;
    } else if (ItemTypeString == "Neck") {  
      console.log("This is Neck")
      DashInput = AssetDashInput.value;
      NeckDashInput = AssetDashInput.value;
      LatestPath = NeckPath;
      Latestctx  = Neck;      
    } else if (ItemTypeString == "Torso") {  
      console.log("This is Torso")
      DashInput = AssetDashInput.value;
      TorsoDashInput = AssetDashInput.value;
      LatestPath = TorsoPath;
      Latestctx  = Torso;
    }
    DrawOnCanvas(LatestPath, Latestctx)
})

AssetFill.addEventListener("input", () => {
    if (ItemTypeString == "Head") {  
      console.log("This is Head")
      Fill = AssetFill.value;
      HeadFill = AssetFill.value;
      LatestPath = HeadPath;
      Latestctx  = Head;
    } else if (ItemTypeString == "Neck") {  
      console.log("This is Neck")
      Fill = AssetFill.value;
      NeckFill = AssetFill.value;
      LatestPath = NeckPath;
      Latestctx  = Neck;      
    } else if (ItemTypeString == "Torso") {  
      console.log("This is Torso")
      Fill = AssetFill.value;
      TorsoFill = AssetFill.value;
      LatestPath = TorsoPath;
      Latestctx  = Torso;
    }
    DrawOnCanvas(LatestPath, Latestctx)
})

function SaveImg() {
    console.log("Hello u wanna save this?")
    let CanvasUrl
    if (ItemTypeString == "Head") {
      CanvasUrl = HeadCanvas.toDataURL();
    } else if (ItemTypeString == "Neck") {
      CanvasUrl = NeckCanvas.toDataURL();
    }
    
    const createEl = document.createElement('a');
    createEl.href = CanvasUrl;

    createEl.download = "download-this-canvas";

    createEl.click();
    createEl.remove();  
}

function SaveAllImg() {
    console.log("Hello u wanna save this?")
    let CanvasUrl
      Canvas.drawImage(HeadCanvas, 0, 0);
      Canvas.drawImage(NeckCanvas, 0, 0);
      Canvas.drawImage(TorsoCanvas, 0, 0);
      CanvasUrl = EveryCanvas.toDataURL();

    
    const createEl = document.createElement('a');
    createEl.href = CanvasUrl;

    createEl.download = "download-this-canvas";

    createEl.click();
    createEl.remove();  
}

function DrawOnCanvas(Path, Currentctx){

    Latestctx = Currentctx;
    LatestPath = Path;
    Currentctx.reset()

    let path1 = new Path2D(Path);
    let path2 = new Path2D(Path);

    Currentctx.translate(Ycoords, Xcoords);  
    Currentctx.scale(Yscale, Xscale);
    Currentctx.rotate(SpinRotation * Math.PI / 180);
    Currentctx.lineCap = "round";
    Currentctx.lineWidth = LineWidth;
    Currentctx.strokeStyle = StrokeColour;
    Currentctx.setLineDash(DashInput.split(" "));
    Currentctx.fillStyle = Fill;
    Currentctx.fill(path2);
    Currentctx.stroke(path1);

    console.log(StrokeColour);
    
    console.log("Draw On Canvas Done");
}    