#pragma strict

public var LED : GameObject;
//var points : Transform[];
var density = 30;

//var curveX : AnimationCurve;
//var curveY : AnimationCurve;
//var curveZ : AnimationCurve;
//private var k : Keyframe[];
//private var ky : Keyframe[];
//private var kz : Keyframe[];

//private var distanceTraveled : float; 


@MenuItem("VisLED/Instantiate Selected")
static function CreatePrefab() {

//	points  = transform.GetComponentsInChildren.<Transform>();
//	var startPos = points[0].transform.position.y;
//	var length =  points[1].transform.position.y;
//	var numLEDs = length * density;
//	var distBetweenLEDs = 1/density;
//	public var LED : GameObject;
	var length = 2.0;
	var density = 30.0;
	var numLEDs = length * density;
	var distBetweenLEDs = 1.0/density;
	var numStrips = 5;
	var stripSpacing = distBetweenLEDs * 2.0;


	for (var i = 0; i< numStrips; i++) {
		var LEDStrip: GameObject;
		LEDStrip = new GameObject();
		LEDStrip.name = "LEDStrip" + i;

		for (var j = 0; j < numLEDs; j++ ) {
			var l : GameObject = PrefabUtility.InstantiatePrefab(Selection.activeObject as GameObject) as GameObject; 
//			var l =  Instantiate(LED, new Vector3(i * 2.0f, 0, 0), Quaternion.identity);
			l.transform.position.y = distBetweenLEDs * j;
			l.transform.parent = LEDStrip.transform;
		}

		LEDStrip.transform.position.x = stripSpacing *i;
//		LEDStrip.transform.parent = this.transform;
	}



	
//    var clone : GameObject = PrefabUtility.InstantiatePrefab(Selection.activeObject as GameObject) as GameObject; 
}

function Start () {
//	
//	points  = transform.GetComponentsInChildren.<Transform>();
//	var startPos = points[0].transform.position.y;
//	var length =  points[1].transform.position.y;
//	var numLEDs = length * density;
//	var distBetweenLEDs = 1/density;
//
//	for (var i = 0; i < numLEDs; i++ ) {
//		 var clone : GameObject = PrefabUtility.InstantiatePrefab(Selection.activeObject as GameObject) as GameObject; 
//	}
//	ky = new Keyframe[points.length];

//	var startPos = points[0].transform.position;
//	for (var i = 0; i < points.length; i++) {
//		ky[i].value = points[i].position.x;
//		ky[i].time = 
		
//	}

//	curveY = new AnimationCurve(ky);
}

function Update () {

}