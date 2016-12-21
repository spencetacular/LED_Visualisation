#pragma strict

public var LED : GameObject;
var points : Transform[];

function Start () {
	points  = transform.GetComponentsInChildren.<Transform>();
}

function Update () {

}