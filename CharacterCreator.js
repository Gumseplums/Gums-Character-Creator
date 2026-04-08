/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let IndivdualAssetButton = [];
let View           = "FrontView";
let Catergory      = "variable is undefined";
let ItemTypeString = "variable is undefined";
let SpecificAsset  = "variable is undefined";

const ButtonDiv          = document.getElementById("ButtonsDiv");
const AssetDiv           = document.getElementById("AssetButtonDiv");
const MainWindow         = document.getElementById("MainWindow");
const ImageTest          = document.getElementById("ImageTest");
const BodyLimbs          = document.getElementById("BodyLimbsDiv");
const AssetButtons       = BodyLimbs.querySelectorAll("button");        // This currently only works for BodyLimb Buttons

CanvasHeight = 2500;
CanvasWidth  = 2000;

const EveryCanvas   = document.getElementById("EverythingCanvas");
const TheCanvas     = EveryCanvas.getContext("2d");
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

const TorsoCanvas   = document.getElementById("TorsoCanvas");
const Torso         = TorsoCanvas.getContext("2d");
TorsoCanvas.height  = CanvasHeight;
TorsoCanvas.width   = CanvasWidth;


let AssetYcoords       = document.getElementById("Ycoords")
let AssetXcoords       = document.getElementById("Xcoords")
let AssetYscale        = document.getElementById("Yscale")
let AssetXscale        = document.getElementById("Xscale")
let AssetSpinRotation  = document.getElementById("SpinRotation");
let AssetLineWidth     = document.getElementById("ThicknessInput");
let AssetStrokeColour  = document.getElementById("OutlineColour");
let AssetDashInput     = document.getElementById("DashedLines");
let AssetFill          = document.getElementById("BackgroundColour");
let AssetZLayer        = document.getElementById("ZLayer");

let DefaultValues = {
    Ycoords:        AssetYcoords.value,
    Xcoords:        AssetXcoords.value,
    Yscale:         AssetYscale.value,
    Xscale:         AssetXscale.value,
    SpinRotation:   AssetSpinRotation.value,
    LineWidth:      AssetLineWidth.value,
    StrokeColour:   AssetStrokeColour.value,
    DashInput:      AssetDashInput.value,
    Fill:           AssetFill.value,
    ZLayer:         AssetZLayer.value,
}


// -------------------------- ASSET VALUES
/*
let FrontView = {
  HeadAsset : {
      Canvas: Head,
      CanvasElement: HeadCanvas,
      Ycoords: 400,
      Xcoords: 50,
      Yscale : 0.3,
      Xscale : 0.3,
      SpinRotation: 0,
      LineWidth: 20,
      StrokeColour: "#000000",
      DashInput: "",
      Fill: "#ffffff",
      ZLayer: 0,
      Path: null
  },

  NeckAsset : {
      Canvas: Neck,
      CanvasElement: NeckCanvas,      
      Ycoords: 433,
      Xcoords: 170,
      Yscale : 0.3,
      Xscale : 0.3,
      SpinRotation: 0,
      LineWidth: 20,
      StrokeColour: "#000000",
      DashInput: "",
      Fill: "#ffffff",
      ZLayer: 0,    
      Path: null
  },

  TorsoAsset : {
      Canvas: Torso,
      CanvasElement: TorsoCanvas,    
      Ycoords: 403,
      Xcoords: 200,
      Yscale : 0.3,
      Xscale : 0.3,
      SpinRotation: 0,
      LineWidth: 20,
      StrokeColour: "#000000",
      DashInput: "",
      Fill: "#ffffff",
      ZLayer: 0,    
      Path: null
  },

}
*/

  let HeadAsset = {
      Canvas: Head,
      CanvasElement: HeadCanvas,
      Ycoords: 400,
      Xcoords: 50,
      Yscale : 0.3,
      Xscale : 0.3,
      SpinRotation: 0,
      LineWidth: 20,
      StrokeColour: "#000000",
      DashInput: "",
      Fill: "#ffffff",
      ZLayer: 0,
      Path: null
  }

  let NeckAsset = {
      Canvas: Neck,
      CanvasElement: NeckCanvas,      
      Ycoords: 433,
      Xcoords: 170,
      Yscale : 0.3,
      Xscale : 0.3,
      SpinRotation: 0,
      LineWidth: 20,
      StrokeColour: "#000000",
      DashInput: "",
      Fill: "#ffffff",
      ZLayer: 0,    
      Path: null
  }

  let TorsoAsset = {
      Canvas: Torso,
      CanvasElement: TorsoCanvas,    
      Ycoords: 403,
      Xcoords: 200,
      Yscale : 0.3,
      Xscale : 0.3,
      SpinRotation: 0,
      LineWidth: 20,
      StrokeColour: "#000000",
      DashInput: "",
      Fill: "#ffffff",
      ZLayer: 0,    
      Path: null
  }

  let ItemTypeVariable = {
      Head:  HeadAsset,
      Neck:  NeckAsset,
      Torso: TorsoAsset,
  }

let LatestPath
let LatestCanvas
let LatestCtx

let CurrentItemTypeVariable

///////////////////////////////////////////Here we fix Different Views///////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const LeftViewButton  = document.getElementById("RotateButtonLeft");
const RightViewButton = document.getElementById("RotateButtonRight");

const ViewArray = ["FrontView","LeftQuaterFrontView","LeftSideView","LeftQuaterBackView","Backview","RightQuaterBackView","RightSideView","RightQuaterFrontView"]
let ViewNumber = 0;

function ChangeView(Orientation) {
    if (Orientation == "Left") {
        if (ViewNumber == 7) {
            ViewNumber = 0;
        } else {
            ViewNumber++
        }
    } else if (Orientation == "Right") {
        if (ViewNumber == 0) {
            ViewNumber = 7;
        } else {
            ViewNumber--
        }
    }

    View = ViewArray[ViewNumber];
    console.log(View);
    
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



AssetButtons.forEach(AssetButtons => {
    AssetButtons.addEventListener("click", () => {
        Catergory = "BodyLimbs";
        ItemTypeString  = AssetButtons.getAttribute("title")

        CurrentItemTypeVariable = ItemTypeVariable[ItemTypeString]

        LoadAssets();
  })
});

async function LoadAssets() {
  let response = await fetch("CharacterCreator.json")
  let assets = await response.json();
  let AssetArray = (assets[Catergory][ItemTypeString]);

  // console.log(assets.BodyLimbs.Head[0].FrontView.FilePath);
  
  /*
  console.log(assets)
  console.log(Catergory);
  console.log(ItemTypeString);
  console.log(View);                // SMT IS WRONG WITH VIEW. IDKKKKKKKKK



// lol I don't need this???  let AssetArray = (assets[Catergory][ItemTypeString][View]);           //this MAY be broken. Since I changed the view. It used to be View, Catergory, Type. But now View is INSIDE Type.   /// wait. WHY do I have this as an array??? /// oh is to save the vategory things maybe??
 */

  AddAssetsToDiv(AssetArray);

};

function AddAssetsToDiv (AssetLocation){

    AssetDiv.innerHTML="";
    let ParaText = document.createElement("p")
    ParaText.classList.add("PText");
    AssetDiv.appendChild(ParaText);
    const node = document.createTextNode(" This is AssetButtonDiv . Here I will have all the "+ ItemTypeString +" assets buttons spawn");
    ParaText.appendChild(node);

    // make sure all the values are correct or smt yea

    AssetYcoords.value = ItemTypeVariable[ItemTypeString].Ycoords;
    DefaultValues.Ycoords = AssetYcoords.value;
    AssetXcoords.value = ItemTypeVariable[ItemTypeString].Xcoords;
    DefaultValues.Xcoords = AssetXcoords.value;
    AssetYscale.value = ItemTypeVariable[ItemTypeString].Yscale;
    DefaultValues.Yscale = AssetYscale.value;
    AssetXscale.value = ItemTypeVariable[ItemTypeString].Xscale;
    DefaultValues.Xscale = AssetXscale.value;
    AssetSpinRotation.value = ItemTypeVariable[ItemTypeString].SpinRotation;
    DefaultValues.SpinRotation = AssetSpinRotation.value;
    AssetLineWidth.value = ItemTypeVariable[ItemTypeString].LineWidth;
    DefaultValues.LineWidth = AssetLineWidth.value;
    AssetStrokeColour.value = ItemTypeVariable[ItemTypeString].StrokeColour;
    DefaultValues.StrokeColour = AssetStrokeColour.value;
    AssetDashInput.value = ItemTypeVariable[ItemTypeString].DashInput;
    DefaultValues.DashInput = AssetDashInput.value;
    AssetFill.value = ItemTypeVariable[ItemTypeString].Fill;
    DefaultValues.Fill = AssetFill.value;

    AssetZLayer.value = ItemTypeVariable[ItemTypeString].ZLayer;
    DefaultValues.ZLayer = AssetZLayer.value;       

    // endy end of that

    AssetLocation.forEach(Asset => {
        console.log(Asset[View].FilePath);
        
        AssetFilePath = Asset[View].FilePath;
        AssetFilePathURL = ("url('"+AssetFilePath+"')");
      
        let Btn  = document.createElement("button");
        AssetDiv.appendChild(Btn);
        Btn.classList.add("Button");
        Btn.classList.add(ItemTypeString);
        Btn.style.backgroundImage = [AssetFilePathURL];
        Btn.title = Asset.Name;
              Btn.addEventListener("click", () => {
                GetSVGPathAndDraw(AssetFilePath)
           })
      });
};

async function GetSVGPathAndDraw() {
    const resp = await fetch('/Body/Head.svg');
    const parser = new DOMParser();
    const svg = parser.parseFromString(await resp.text(), 'image/svg+xml');
    const path = svg.querySelector('path');
    const d = path.getAttribute('d');

    DrawOnCanvas(d, ItemTypeVariable[ItemTypeString].Canvas, ItemTypeVariable[ItemTypeString])
};

//////////////////////// !!!!!!!!!!!! CHANGE THE ZLAY ON EVERYTHING. Put all the things like the background, text, buttons, ext, on like Zlayer -1000 or smt crazy. SO the user can use -zlayer numbers without the asset going behind ui things

///// here are the input functions

AssetYcoords.addEventListener("input", () => {
  console.log("Hello u changed AssetYcoords");
  DefaultValues.Ycoords = AssetYcoords.value;
  ItemTypeVariable[ItemTypeString].Ycoords = AssetYcoords.value;

  console.log(ItemTypeVariable[ItemTypeString].Ycoords);
  console.log(ItemTypeVariable[ItemTypeString]);
  
  DrawOnCanvas(ItemTypeVariable[ItemTypeString].Path, ItemTypeVariable[ItemTypeString].Canvas, ItemTypeVariable[ItemTypeString])
}),

AssetXcoords.addEventListener("input", () => {
  console.log("Hello u changed AssetXcoords");
  DefaultValues.Xcoords = AssetXcoords.value;
  ItemTypeVariable[ItemTypeString].Xcoords = AssetXcoords.value;

  console.log(ItemTypeVariable[ItemTypeString].Xcoords);
  console.log(ItemTypeVariable[ItemTypeString]);
  
  DrawOnCanvas(ItemTypeVariable[ItemTypeString].Path, ItemTypeVariable[ItemTypeString].Canvas, ItemTypeVariable[ItemTypeString])
})

AssetYscale.addEventListener("input", () => {
  console.log("Hello u changed AssetYscale");
  DefaultValues.Yscale = AssetYscale.value;
  ItemTypeVariable[ItemTypeString].Yscale = AssetYscale.value;

  console.log(ItemTypeVariable[ItemTypeString].Yscale);
  console.log(ItemTypeVariable[ItemTypeString]);
  
  DrawOnCanvas(ItemTypeVariable[ItemTypeString].Path, ItemTypeVariable[ItemTypeString].Canvas, ItemTypeVariable[ItemTypeString])
}),

AssetXscale.addEventListener("input", () => {
  console.log("Hello u changed AssetXscale");
  DefaultValues.Xscale = AssetXscale.value;
  ItemTypeVariable[ItemTypeString].Xscale = AssetXscale.value;

  console.log(ItemTypeVariable[ItemTypeString].Xscale);
  console.log(ItemTypeVariable[ItemTypeString]);
  
  DrawOnCanvas(ItemTypeVariable[ItemTypeString].Path, ItemTypeVariable[ItemTypeString].Canvas, ItemTypeVariable[ItemTypeString])
})

AssetSpinRotation.addEventListener("input", () => {
  console.log("Hello u changed AssetSpinRotation");
  DefaultValues.SpinRotation = AssetSpinRotation.value;
  ItemTypeVariable[ItemTypeString].SpinRotation = AssetSpinRotation.value;

  console.log(ItemTypeVariable[ItemTypeString].SpinRotation);
  console.log(ItemTypeVariable[ItemTypeString]);
  
  DrawOnCanvas(ItemTypeVariable[ItemTypeString].Path, ItemTypeVariable[ItemTypeString].Canvas, ItemTypeVariable[ItemTypeString])
})

AssetLineWidth.addEventListener("input", () => {
  console.log("Hello u changed AssetLineWidth");
  DefaultValues.LineWidth = AssetLineWidth.value;
  ItemTypeVariable[ItemTypeString].LineWidth = AssetLineWidth.value;

  console.log(ItemTypeVariable[ItemTypeString].LineWidth);
  console.log(ItemTypeVariable[ItemTypeString]);
  
  DrawOnCanvas(ItemTypeVariable[ItemTypeString].Path, ItemTypeVariable[ItemTypeString].Canvas, ItemTypeVariable[ItemTypeString])
})

AssetStrokeColour.addEventListener("input", () => {
  console.log("Hello u changed AssetStrokeColour");
  DefaultValues.StrokeColour = AssetStrokeColour.value;
  ItemTypeVariable[ItemTypeString].StrokeColour = AssetStrokeColour.value;

  console.log(ItemTypeVariable[ItemTypeString].StrokeColour);
  console.log(ItemTypeVariable[ItemTypeString]);
  
  DrawOnCanvas(ItemTypeVariable[ItemTypeString].Path, ItemTypeVariable[ItemTypeString].Canvas, ItemTypeVariable[ItemTypeString])
})

AssetDashInput.addEventListener("input", () => {
  console.log("Hello u changed AssetDashInput");
  DefaultValues.DashInput = AssetDashInput.value;
  ItemTypeVariable[ItemTypeString].DashInput = AssetDashInput.value;

  console.log(ItemTypeVariable[ItemTypeString].DashInput);
  console.log(ItemTypeVariable[ItemTypeString]);
  
  DrawOnCanvas(ItemTypeVariable[ItemTypeString].Path, ItemTypeVariable[ItemTypeString].Canvas, ItemTypeVariable[ItemTypeString])
})

AssetFill.addEventListener("input", () => {
  console.log("Hello u changed AssetFill");
  DefaultValues.Fill = AssetFill.value;
  ItemTypeVariable[ItemTypeString].Fill = AssetFill.value;

  console.log(ItemTypeVariable[ItemTypeString].Fill);
  console.log(ItemTypeVariable[ItemTypeString]);
  
  DrawOnCanvas(ItemTypeVariable[ItemTypeString].Path, ItemTypeVariable[ItemTypeString].Canvas, ItemTypeVariable[ItemTypeString])
})

AssetZLayer.addEventListener("input", () => {
  console.log("Hello u changed AssetZLayer");
  DefaultValues.ZLayer = AssetZLayer.value;
  ItemTypeVariable[ItemTypeString].ZLayer = AssetZLayer.value;

  console.log(ItemTypeVariable[ItemTypeString].ZLayer);
  console.log(ItemTypeVariable[ItemTypeString]);
  
  ChangeZLayer(ItemTypeVariable[ItemTypeString]);
})



// "oh no! canvas stopped working!" check if the last function has a comma at the end. DrawOnCanvas doesn't like that
function DrawOnCanvas(Path, CurrentCanvas, Currentctx){

    Currentctx.Path   = Path;
    LatestCanvas      = CurrentCanvas;
    LatestCtx         = Currentctx
    console.log(Currentctx)

    CurrentCanvas.reset()

    let path1 = new Path2D(Path);
    let path2 = new Path2D(Path);

    CurrentCanvas.translate(Currentctx.Ycoords, Currentctx.Xcoords);  
    CurrentCanvas.scale(Currentctx.Yscale, Currentctx.Xscale);
    CurrentCanvas.rotate(Currentctx.SpinRotation * Math.PI / 180);
    CurrentCanvas.lineCap = "round";
    CurrentCanvas.lineWidth = Currentctx.LineWidth;
    CurrentCanvas.strokeStyle = Currentctx.StrokeColour;
    CurrentCanvas.setLineDash(Currentctx.DashInput.split(" "));
    CurrentCanvas.fillStyle = Currentctx.Fill;
    CurrentCanvas.fill(path2);
    CurrentCanvas.stroke(path1);
    
    console.log(Currentctx.Ycoords);
    console.log(Currentctx)
    console.log("Draw On Canvas Done");
}


function ChangeZLayer(Canvas) {
  console.log("zlayer changed")

  Canvas.CanvasElement.style.zIndex = Canvas.ZLayer;
}

function SaveImg() {
    console.log("Hello u wanna save this?")
    let CanvasUrl
    CanvasUrl = ItemTypeVariable[ItemTypeString].CanvasElement.toDataURL();

    const createEl = document.createElement("a");
    createEl.href = CanvasUrl;

    createEl.download = (ItemTypeString); //name for file
    
    createEl.click();
    createEl.remove();  
}

function SaveAllImg() {
  let CanvasUrl
  Object.values(ItemTypeVariable).forEach(elementCanvas => {
    console.log(elementCanvas);
    TheCanvas.drawImage(elementCanvas.CanvasElement, 0, 0);
  })

  CanvasUrl = EveryCanvas.toDataURL();

    
  const createEl = document.createElement('a');
  createEl.href = CanvasUrl;

  createEl.download = "FullGumsCharacter";

  createEl.click();
  createEl.remove();
}




//////////////////////////////////////
//////////////////////
///////////////////////
///////////////
///////////
//////////////////////
///////////////////////
///////////////
///////////

const ButtonDivParent    = document.getElementById("ButtonDivParent");
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
    } else if (Buttons == LeftViewButton) {
        ChangeView("Left")
    } else if (Buttons == RightViewButton) {
        ChangeView("Right")
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
