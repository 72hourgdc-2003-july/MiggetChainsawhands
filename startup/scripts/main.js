EvaluateSystemScript("time.js");


var font = GetSystemFont();
font.setColorMask(CreateColor(193,131,61,255))

var Obstruct = new Array();
var Sprite = new Array();
var Blast = new Array();
var SpriteSet = new Array();
var Pills = new Array();
var PillPic = new Array();
var HealthPic = new Array();
var BloodPic = new Array();
var DelayScripts = new Array();
var Spawn = new Array();
var MaxObstruct = 20;
var MaxSprites = 7;
var MaxBlasts = 20;
var MaxPills = 6;
var number = new Array();
var Invincible = new Array();

var TheSound = new Array();

TheSound[0] = LoadSound("enemy_attack.wav");
TheSound[1] = LoadSound("enemy_death.wav");
TheSound[2] = LoadSound("enemy_pain.wav");
TheSound[3] = LoadSound("jump.wav");
TheSound[4] = LoadSound("land.wav");
TheSound[5] = LoadSound("menubutton.wav");
TheSound[6] = LoadSound("migget_attack.wav");
TheSound[7] = LoadSound("miggit_death.wav");
TheSound[8] = LoadSound("miggit_pain.wav");
TheSound[9] = LoadSound("special1.wav");
TheSound[10] = LoadSound("special2.wav");
TheSound[11] = LoadSound("special3.wav");
TheSound[12] = LoadSound("special4.wav");


Invincible[0] = LoadImage("invo_01.png");
Invincible[1] = LoadImage("invo_02.png");
Invincible[2] = LoadImage("invo_03.png");
Invincible[3] = LoadImage("invo_04.png");

number[0] = LoadImage("0.png");
number[1] = LoadImage("1.png");
number[2] = LoadImage("2.png");
number[3] = LoadImage("3.png");
number[4] = LoadImage("4.png");
number[5] = LoadImage("5.png");
number[6] = LoadImage("6.png");
number[7] = LoadImage("7.png");
number[8] = LoadImage("8.png");
number[9] = LoadImage("9.png");
number[-1] = LoadImage("1.png");
number[-2] = LoadImage("2.png");
number[-3] = LoadImage("3.png");
number[-4] = LoadImage("4.png");
number[-5] = LoadImage("5.png");
number[-6] = LoadImage("6.png");
number[-7] = LoadImage("7.png");
number[-8] = LoadImage("8.png");
number[-9] = LoadImage("9.png");

Spawn[0]= 38;
Spawn[1]= 3;

Spawn[2]= 256;
Spawn[3]= 4;

Spawn[4]= 16;
Spawn[5]= 124;

Spawn[6]= 288;
Spawn[7]= 144;

Spawn[8]= 144;
Spawn[9]= 104;

var Jump = false;
var Fire = false;
var Ingore_Input = false;
var Ing_left = false;
var Ing_right = false;
var last_dir = 0;
var wep = 1;
var Frames = 0;
var Kills = 0;
var TotalKills = 0;
var Lives = 3;
var diff = 0;
var fubar = 0;

for (i=0; i<MaxObstruct; i++)
{
	Obstruct[i] = new Object();
	Obstruct[i].x = 0;
	Obstruct[i].y = 0;
	Obstruct[i].w = 8;
	Obstruct[i].h = 240;
	Obstruct[i].t = 0;
}
for (i=0; i<MaxPills; i++)
{
	Pills[i] = new Object();
	Pills[i].hp = 0;
	Pills[i].x = 0;
	Pills[i].y = 0;
	Pills[i].t = 0;
}

	Obstruct[1].x = 0;
	Obstruct[1].y = -100;
	Obstruct[1].w = 8;
	Obstruct[1].h = 440;
	Obstruct[1].t = 0;
	
	Obstruct[2].x = 8;
	Obstruct[2].y = 224;
	Obstruct[2].w = 304;
	Obstruct[2].h = 16;
	Obstruct[2].t = 0;

	Obstruct[3].x = 312;
	Obstruct[3].y = -100;
	Obstruct[3].w = 8;
	Obstruct[3].h = 440;
	Obstruct[3].t = 0;

	Obstruct[4].x = 72;
	Obstruct[4].y = 184;
	Obstruct[4].w = 40;
	Obstruct[4].h = 8;
	Obstruct[4].t = 1;

	Obstruct[5].x = 144;
	Obstruct[5].y = 184;
	Obstruct[5].w = 56;
	Obstruct[5].h = 8;
	Obstruct[5].t = 1;

	Obstruct[6].x = 232;
	Obstruct[6].y = 168;
	Obstruct[6].w = 80;
	Obstruct[6].h = 8;
	Obstruct[6].t = 1;

	Obstruct[7].x = 8;
	Obstruct[7].y = 152;
	Obstruct[7].w = 32;
	Obstruct[7].h = 8;
	Obstruct[7].t = 1;

	Obstruct[8].x = 112;
	Obstruct[8].y = 128;
	Obstruct[8].w = 80;
	Obstruct[8].h = 8;
	Obstruct[8].t = 1;

	Obstruct[9].x = 264;
	Obstruct[9].y = 120;
	Obstruct[9].w = 48;
	Obstruct[9].h = 8;
	Obstruct[9].t = 1;

	Obstruct[10].x = 8;
	Obstruct[10].y = 112;
	Obstruct[10].w = 24;
	Obstruct[10].h = 8;
	Obstruct[10].t = 1;

	Obstruct[11].x = 136;
	Obstruct[11].y = 88;
	Obstruct[11].w = 48;
	Obstruct[11].h = 8;
	Obstruct[11].t = 1;

	Obstruct[12].x = 216;
	Obstruct[12].y = 80;
	Obstruct[12].w = 56;
	Obstruct[12].h = 8;
	Obstruct[12].t = 1;

	Obstruct[13].x = 272;
	Obstruct[13].y = 40;
	Obstruct[13].w = 8;
	Obstruct[13].h = 48;
	Obstruct[13].t = 0;

	Obstruct[14].x = 216;
	Obstruct[14].y = 32;
	Obstruct[14].w = 56;
	Obstruct[14].h = 8;
	Obstruct[14].t = 1;

	Obstruct[15].x = 132;
	Obstruct[15].y = 48;
	Obstruct[15].w = 48;
	Obstruct[15].h = 8;
	Obstruct[15].t = 1;

	Obstruct[16].x = 32;
	Obstruct[16].y = 72;
	Obstruct[16].w = 64;
	Obstruct[16].h = 8;
	Obstruct[16].t = 1;

	Obstruct[17].x = 88;
	Obstruct[17].y = 40;
	Obstruct[17].w = 8;
	Obstruct[17].h = 24;
	Obstruct[17].t = 0;

	Obstruct[18].x = 96;
	Obstruct[18].y = 32;
	Obstruct[18].w = 14;
	Obstruct[18].h = 8;
	Obstruct[18].t = 1;

	Obstruct[19].x = 8;
	Obstruct[19].y = 32;
	Obstruct[19].w = 48
	Obstruct[19].h = 8;
	Obstruct[19].t = 1;

for (i=0; i<MaxSprites; i++)
{
Sprite[i] = new Object();
SpriteSet[i] = new Array();
Sprite[i].attack = 0;
Sprite[i].counter = 0;
Sprite[i].counter2 = 0;
Sprite[i].bc = 0;
Sprite[i].hp = 0;

Sprite[i].x = 10; 
Sprite[i].y = 0; 
Sprite[i].vx = 0; 
Sprite[i].vy = 0; 
Sprite[i].ss = 0;
Sprite[i].f = 1;
Sprite[i].w = 16;
Sprite[i].h = 24;
Sprite[i].bw1 = 8;
Sprite[i].bh1 = 8;
Sprite[i].team = 0;
Sprite[i].jd = 0;
Sprite[i].la = 0;
Sprite[i].speed = 3;
}

for (i=0; i<MaxBlasts; i++)
{
	Blast[i] = new Object();
	Blast[i].x = 0;
	Blast[i].y = 0;
	Blast[i].vx = 0;
	Blast[i].vy = 0;
	Blast[i].hp = 0;
	Blast[i].ss = 1;
	Blast[i].f = 1;
	Blast[i].w = 8;
	Blast[i].h = 4;
}

SpriteSet[0][0] = 1;
SpriteSet[0][1] = LoadImage("Run_01.png");
SpriteSet[0][2] = LoadImage("Run_02.png");
SpriteSet[0][3] = LoadImage("Run_03.png");
SpriteSet[0][4] = LoadImage("Run_04.png");
SpriteSet[0][5] = LoadImage("Run_05.png");
SpriteSet[0][6] = LoadImage("Run_06.png");
SpriteSet[0][7] = LoadImage("Run_07.png");
SpriteSet[0][8] = LoadImage("Run_08.png");

SpriteSet[0][9] = LoadImage("idle_01.png");
SpriteSet[0][10] = LoadImage("Atk_01.png");
SpriteSet[0][11] = LoadImage("Atk_02.png");
SpriteSet[0][12] = LoadImage("Atk_03.png");
SpriteSet[0][13] = LoadImage("Atk_04.png");
SpriteSet[0][14] = LoadImage("Atk_05.png");
SpriteSet[0][15] = LoadImage("Atk_06.png");

SpriteSet[0][16] = LoadImage("swipe_01.png");
SpriteSet[0][17] = LoadImage("swipe_02.png");
SpriteSet[0][18] = LoadImage("swipe_03.png");

SpriteSet[0][19] = LoadImage("idle_01.png");
SpriteSet[0][20] = LoadImage("idle_02.png");
SpriteSet[0][21] = LoadImage("idle_03.png");
SpriteSet[0][22] = LoadImage("idle_04.png");
SpriteSet[0][23] = LoadImage("idle_05.png");
SpriteSet[0][24] = LoadImage("idle_06.png");

SpriteSet[0][25] = LoadImage("jump_up_01.png");
SpriteSet[0][26] = LoadImage("jump_up_02.png");
SpriteSet[0][27] = LoadImage("jump_down_01.png");

SpriteSet[0][28] = LoadImage("special_01.png");
SpriteSet[0][29] = LoadImage("special_02.png");
SpriteSet[0][30] = LoadImage("special_03.png");
SpriteSet[0][31] = LoadImage("special_04.png");
SpriteSet[0][32] = LoadImage("special_05.png");
SpriteSet[0][33] = LoadImage("special_06.png");
SpriteSet[0][34] = LoadImage("special_07.png");

SpriteSet[0][35] = LoadImage("Death_01.png");
SpriteSet[0][36] = LoadImage("Death_02.png");
SpriteSet[0][37] = LoadImage("Death_03.png");
SpriteSet[0][38] = LoadImage("Death_04.png");
SpriteSet[0][39] = LoadImage("Death_05.png");
SpriteSet[0][40] = LoadImage("Death_06.png");
SpriteSet[0][41] = LoadImage("Death_07.png");
SpriteSet[0][42] = LoadImage("Death_08.png");
SpriteSet[0][43] = LoadImage("Death_09.png");
SpriteSet[0][44] = LoadImage("Death_10.png");
SpriteSet[0][45] = LoadImage("Death_11.png");
SpriteSet[0][46] = LoadImage("Death_12.png");
SpriteSet[0][47] = LoadImage("Death_13.png");
SpriteSet[0][48] = LoadImage("Death_14.png");
SpriteSet[0][49] = LoadImage("Death_15.png");
SpriteSet[0][50] = LoadImage("Death_16.png");

SpriteSet[0][51] = LoadImage("Pain_01.png");

SpriteSet[1][0] = 1;
SpriteSet[1][1] = LoadImage("nme1_run_01.png");
SpriteSet[1][2] = LoadImage("nme1_run_02.png");
SpriteSet[1][3] = LoadImage("nme1_run_03.png");
SpriteSet[1][4] = LoadImage("nme1_run_04.png");
SpriteSet[1][5] = LoadImage("nme1_run_05.png");
SpriteSet[1][6] = LoadImage("nme1_run_06.png");
SpriteSet[1][7] = LoadImage("nme1_run_07.png");
SpriteSet[1][8] = LoadImage("nme1_run_08.png");

SpriteSet[1][9] = LoadImage("nme1_run_02.png");
/*
SpriteSet[1][10] = LoadImage("Atk_01.png");
SpriteSet[1][11] = LoadImage("Atk_02.png");
SpriteSet[1][12] = LoadImage("Atk_03.png");
SpriteSet[1][13] = LoadImage("Atk_04.png");
SpriteSet[1][14] = LoadImage("Atk_05.png");
SpriteSet[1][15] = LoadImage("Atk_06.png");
*/
SpriteSet[1][16] = LoadImage("nme1_attack_01.png");
SpriteSet[1][17] = LoadImage("nme1_attack_02.png");
SpriteSet[1][18] = LoadImage("nme1_attack_03.png");

SpriteSet[1][19] = LoadImage("nme1_run_02.png");
SpriteSet[1][20] = LoadImage("nme1_run_02.png");
SpriteSet[1][21] = LoadImage("nme1_run_02.png");
SpriteSet[1][22] = LoadImage("nme1_run_02.png");
SpriteSet[1][23] = LoadImage("nme1_run_02.png");
SpriteSet[1][24] = LoadImage("nme1_run_02.png");

SpriteSet[1][25] = LoadImage("nme1jump_01.png");
SpriteSet[1][26] = LoadImage("nme1jump_02.png");
SpriteSet[1][27] = LoadImage("nme1jumpfall_01.png");
/*
SpriteSet[1][28] = LoadImage("special_01.png");
SpriteSet[1][29] = LoadImage("special_02.png");
SpriteSet[1][30] = LoadImage("special_03.png");
SpriteSet[1][31] = LoadImage("special_04.png");
SpriteSet[1][32] = LoadImage("special_05.png");
SpriteSet[1][33] = LoadImage("special_06.png");
SpriteSet[1][34] = LoadImage("special_07.png");
*/
SpriteSet[1][35] = LoadImage("nme1_death_01.png");
SpriteSet[1][36] = LoadImage("nme1_death_02.png");
SpriteSet[1][37] = LoadImage("nme1_death_03.png");
SpriteSet[1][38] = LoadImage("nme1_death_04.png");
SpriteSet[1][39] = LoadImage("nme1_death_05.png");
SpriteSet[1][40] = LoadImage("nme1_death_06.png");
SpriteSet[1][41] = LoadImage("nme1_death_07.png");
SpriteSet[1][42] = LoadImage("nme1_death_08.png");
SpriteSet[1][43] = LoadImage("nme1_death_09.png");
SpriteSet[1][44] = LoadImage("nme1_death_10.png");
SpriteSet[1][45] = LoadImage("nme1_death_11.png");
SpriteSet[1][46] = LoadImage("nme1_death_12.png");
SpriteSet[1][47] = LoadImage("nme1_death_13.png");
SpriteSet[1][48] = LoadImage("nme1_death_14.png");
SpriteSet[1][49] = LoadImage("nme1_death_15.png");
SpriteSet[1][50] = LoadImage("nme1_death_16.png");

SpriteSet[1][51] = LoadImage("nme1_pain.png");



SpriteSet[2][0] = 1;
SpriteSet[2][1] = LoadImage("special2_01.png");
SpriteSet[2][2] = LoadImage("special2_02.png");
SpriteSet[2][3] = LoadImage("special2_03.png");
SpriteSet[2][4] = LoadImage("special2_04.png");
SpriteSet[2][5] = LoadImage("special2_05.png");
SpriteSet[2][6] = LoadImage("special2_05.png");
SpriteSet[2][7] = LoadImage("special2_06.png");
SpriteSet[2][8] = LoadImage("special2_06.png");

SpriteSet[3][1] = LoadImage("level1_01.png");
SpriteSet[3][2] = LoadImage("level1_02.png");
SpriteSet[3][3] = LoadImage("level1_03.png");
SpriteSet[3][4] = LoadImage("level1_04.png");
SpriteSet[3][5] = LoadImage("level1_05.png");
SpriteSet[3][6] = LoadImage("level1_06.png");
SpriteSet[3][7] = LoadImage("level1_07.png");
SpriteSet[3][8] = LoadImage("level1_08.png");



PillPic[0] = LoadImage("pill1.png");
PillPic[1] = LoadImage("pill2.png");
PillPic[2] = LoadImage("pill3.png");
PillPic[3] = LoadImage("pill4.png");
PillPic[4] = LoadImage("health1.png");
PillPic[5] = LoadImage("health2.png");
PillPic[6] = LoadImage("health3.png");
PillPic[7] = LoadImage("health4.png");
PillPic[8] = LoadImage("life1.png");
PillPic[9] = LoadImage("life2.png");
PillPic[10] = LoadImage("life3.png");
PillPic[11] = LoadImage("life4.png");

BloodPic[1] = LoadImage("bloodsplat_06.png");
BloodPic[2] = LoadImage("bloodsplat_05.png");
BloodPic[3] = LoadImage("bloodsplat_04.png");
BloodPic[4] = LoadImage("bloodsplat_03.png");
BloodPic[5] = LoadImage("bloodsplat_02.png");
BloodPic[6] = LoadImage("bloodsplat_01.png");
BloodPic[7] = LoadImage("bloodsplat_06f.png");
BloodPic[8] = LoadImage("bloodsplat_05f.png");
BloodPic[9] = LoadImage("bloodsplat_04f.png");
BloodPic[10] = LoadImage("bloodsplat_03f.png");
BloodPic[11] = LoadImage("bloodsplat_02f.png");
BloodPic[12] = LoadImage("bloodsplat_01f.png");

function init()
{
for (i=0; i<MaxSprites; i++)
{
Sprite[i].attack = 0;
Sprite[i].counter = 0;
Sprite[i].counter2 = 0;
Sprite[i].bc = 0;
Sprite[i].hp = 0;

Sprite[i].x = 10; 
Sprite[i].y = 0; 
Sprite[i].vx = 0; 
Sprite[i].vy = 0; 
Sprite[i].ss = 0;
Sprite[i].f = 1;
Sprite[i].w = 16;
Sprite[i].h = 24;
Sprite[i].bw1 = 8;
Sprite[i].bh1 = 8;
Sprite[i].team = 0;
Sprite[i].jd = 0;
Sprite[i].la = 0;
Sprite[i].speed = 3;
}

for (i=0; i<MaxBlasts; i++)
{
	Blast[i].x = 0;
	Blast[i].y = 0;
	Blast[i].vx = 0;
	Blast[i].vy = 0;
	Blast[i].hp = 0;
	Blast[i].ss = 1;
	Blast[i].f = 1;
	Blast[i].w = 8;
	Blast[i].h = 4;
}
for (i=0; i<MaxPills; i++)
{
	Pills[i].hp = 0;
	Pills[i].x = 0;
	Pills[i].y = 0;
	Pills[i].t = 0;
}


Sprite[0].hp = 10;
Sprite[0].x = 10; 
Sprite[0].y = 0; 
Sprite[0].vx = 0; 
Sprite[0].vy = 0; 
Sprite[0].ss = 0;
Sprite[0].f = 1;
Sprite[0].w = 16;
Sprite[0].h = 24;
Sprite[0].bw1 = 8;
Sprite[0].bh1 = 8;
Sprite[0].team = 0;
Sprite[0].jd = 0;
Sprite[0].attack = 0;
Sprite[0].la = 0;
Sprite[0].speed = 3;
Sprite[0].counter2 = 0;

Sprite[1].hp = 1; 
Sprite[1].x = 100; 
Sprite[1].y = 100; 
Sprite[1].vx = 0; 
Sprite[1].vy = 0; 
Sprite[1].ss = 1;
Sprite[1].f = 1;
Sprite[1].w = 16;
Sprite[1].h = 24;
Sprite[1].bw1 = 8;
Sprite[1].bh1 = 8;
Sprite[1].team = 1;
Sprite[1].jd = 0;
Sprite[1].attack = 0;
Sprite[1].la = 0;
Sprite[1].speed = 2;
Sprite[1].counter2 = 0;

Sprite[2].hp = 1; 
Sprite[2].x = 250; 
Sprite[2].y = 100; 
Sprite[2].vx = 0; 
Sprite[2].vy = 0; 
Sprite[2].ss = 1;
Sprite[2].f = 1;
Sprite[2].w = 16;
Sprite[2].h = 24;
Sprite[2].bw1 = 8;
Sprite[2].bh1 = 8;
Sprite[2].team = 1;
Sprite[2].jd = 0;
Sprite[2].attack = 0;
Sprite[2].la = 0;
Sprite[2].speed = 3;
Sprite[2].counter2 = 0;
}

function game()
{
TotalKills = 0;
menu();
}

function menu(fad)
{
var image = LoadImage("CompTitlescreen.png");
var image2 = LoadImage("credits.png");
var selection = 0;
var sel1 = LoadImage("sel1.png");
var sel2 = LoadImage("sel2.png");
var HighScore = OpenFile("../images/h.png").read("int",91);
HighScore = (HighScore-1)/3; 
var highy = 1;
var boo = true;

	if (TotalKills > HighScore)
	{
	HighScore = TotalKills;
	highy = 2;
	(OpenFile("../images/h.png").write("int", TotalKills*3+1));
	}
	else if (highy != 1)
		highy = 3;
	
	if (fad == true)
	{
		for (i=0; i<75; i++)
		{
			while (GetTime() - LastGetTime < 100/4)
				;

			Frames++
			LastGetTime = GetTime();

			image2.blit(0,0);
			
			ApplyColorMask(CreateColor(255,255,255,255-i*255/75));
			FlipScreen();
		}
	
		image2.blit(0,0);
		Delay(1500);

		for (i=0; i<75; i++)
		{
			while (GetTime() - LastGetTime < 100/4)
				;

			Frames++
			LastGetTime = GetTime();

			image2.blit(0,0);
			
			ApplyColorMask(CreateColor(255,255,255,i*255/75));
			FlipScreen();
		}

		for (i=0; i<75; i++)
		{
			while (GetTime() - LastGetTime < 100/4)
				;

			Frames++
			LastGetTime = GetTime();

			image.blit(0,0);
			
			if (highy == 2)
				font.drawText(103,119, "New High Score: "+HighScore);
			else if (highy == 1)
				font.drawText(103,119, "High Score: " + HighScore);
			else 
			{
				font.drawText(123,109, "GAME OVER ");
				font.drawText(103,119, "High Score: " + HighScore);
			}
			//selection blit.
			if (selection == 0)
				sel1.blit(1, 205);
			else
				sel2.blit(1, 220);
			ApplyColorMask(CreateColor(255,255,255,255-i*255/75));
			FlipScreen();
		}
	}

	while (AreKeysLeft())
		GetKey();

	while (boo == true)
	{
		image.blit(0,0);
			if (highy == 2)
				font.drawText(103,119, "New High Score: "+HighScore);
			else if (highy == 1)
				font.drawText(103,119, "High Score: " + HighScore);
			else 
			{
				font.drawText(123,109, "GAME OVER ");
				font.drawText(103,119, "High Score: " + HighScore);
			}
		//selection blit.
		if (selection == 0)
			sel1.blit(1, 205);
		else
			sel2.blit(1, 220);
		
		FlipScreen();
		
		while(AreKeysLeft() == true)
		{
			switch (GetKey())
			{
				case KEY_DOWN:
				{
					selection++;
					if (selection > 1)
					selection = 1;
					else
						PlayTheSound(5);

				break;
				}
				case KEY_UP:
				{					selection--;
					if (selection < 0)
					selection = 0;
					else
						PlayTheSound(5);
				break;
				}
				case KEY_ESCAPE:
				{
					PlayTheSound(5);
					return;
				}
				case KEY_ENTER:
				{
					if (selection == 0)
					{
					PlayTheSound(5);
					highy = 2;
					selection = 0;
					game2(false, HighScore);
					while(AreKeysLeft() == true)
					GetKey();
					boo = false;
					break;
					}
					else
						return;
				}
				case KEY_SPACE:
				{
					PlayTheSound(5);
					highy = 2;
					selection = 0;
					game2(true, highs);
					while(AreKeysLeft() == true)
					GetKey();
					boo = false;
				}
			}
		}
	}

//main menu here
//menu();
}

var LastGetTime = GetTime();

function game2(fun, highs)
{
init();
Lives = 3;
var bg = LoadImage("bg1.png");
LastGetTime = GetTime();
var FrameSec = 100/4;
var Music = LoadSound("musictest1.mp3");
Music = LoadSound("musictest1.mp3");
Music = LoadSound("musictest1.mp3");

var tempy = 0;
var temp = "";
var dFrames = 0;
Music.play(true);
var Pause = false;
var PicX = LoadImage("xicon.png");
var HighPic = LoadImage("scoreicon.png");
var hpcolour = CreateColor(2,2,102, 255);
if (fun == undefined)
	fun = false;
TotalKills = 0;

if (highs == undefined)
highs = 0;
	while (true)
	{
		if (TotalKills > 200)
			diff = 5;
		else if (TotalKills > 100)
			diff = 4;
		else if (TotalKills > 50)
			diff = 3;
		else if (TotalKills > 30)
			diff = 2;
		else if (TotalKills > 10)
			diff = 1;
		else 
			diff = 0;
		//blit background

			if (fubar >0)
				bg.blit(0,Math.floor(Math.random()*3)-1);
			else
				bg.blit(0,0);
		//blit people
		for (i=MaxSprites-1; i>=0; i--)
		{
			if (Sprite[i].hp != 0 && Sprite[i].hp != undefined)
			{
				if (Sprite[i].ld == 0)
					SpriteSet[Sprite[i].ss][Sprite[i].f].blit(Math.floor(Sprite[i].x-Sprite[i].bw1), Math.floor(Sprite[i].y-Sprite[i].bh1)+2);
				else
					SpriteSet[Sprite[i].ss][Sprite[i].f].transformBlit(Math.floor(Sprite[i].x- Sprite[i].bw1+ SpriteSet[Sprite[i].ss][Sprite[i].f].width), Math.floor(Sprite[i].y-Sprite[i].bh1)+2, 
					Math.floor(Sprite[i].x-Sprite[i].bw1), Math.floor(Sprite[i].y-Sprite[i].bh1)+2, 
					Math.floor(Sprite[i].x-Sprite[i].bw1), Math.floor(Sprite[i].y-Sprite[i].bh1+ SpriteSet[Sprite[i].ss][Sprite[i].f].height)+2,
					Math.floor(Sprite[i].x-Sprite[i].bw1+ SpriteSet[Sprite[i].ss][Sprite[i].f].width), Math.floor(Sprite[i].y-Sprite[i].bh1+ SpriteSet[Sprite[i].ss][Sprite[i].f].height)+2);

				if (Sprite[i].bc > 0&&Sprite[i].ld == 0)
					BloodPic[Sprite[i].bc].blit(Math.floor(Sprite[i].x+8-BloodPic[Sprite[i].bc].width/2), Math.floor(Sprite[i].y-Sprite[i].bh1)-10);
				else if (Sprite[i].bc > 0)
					BloodPic[Sprite[i].bc+6].blit(Math.floor(Sprite[i].x+8-BloodPic[Sprite[i].bc].width/2), Math.floor(Sprite[i].y-Sprite[i].bh1)-10);

			}
		}
		if (Sprite[0].invince > 0)
			Invincible[Math.floor(Math.random()*4)].blit(Math.floor(Sprite[0].x-Sprite[0].bw1), Math.floor(Sprite[0].y-Sprite[0].bh1)+4);

		for (i=0; i<MaxBlasts; i++)
		{
			if (Blast[i].hp != 0)
			{
				if (Sprite[i].ld == 0)
					SpriteSet[Blast[i].ss][Blast[i].f].blit(Math.floor(Blast[i].x), Math.floor(Blast[i].y)-15);
				else
					SpriteSet[Blast[i].ss][Blast[i].f].transformBlit(Math.floor(Blast[i].x+SpriteSet[Blast[i].ss][Blast[i].f].width), Math.floor(Blast[i].y-15),
					Math.floor(Blast[i].x), Math.floor(Blast[i].y-15),
					Math.floor(Blast[i].x), Math.floor(Blast[i].y+SpriteSet[Blast[i].ss][Blast[i].f].height-15),
					Math.floor(Blast[i].x+SpriteSet[Blast[i].ss][Blast[i].f].width), Math.floor(Blast[i].y+SpriteSet[Blast[i].ss][Blast[i].f].height-15)
					);
			}
		}
		for (i=0; i<MaxPills; i++)
		{
			if (Pills[i].hp > 0 &&Pills[i].t == 2)
				PillPic[Pills[i].f+Pills[i].t*4].blit(Math.floor(Pills[i].x-4), Math.floor(Pills[i].y+8));
			else if (Pills[i].hp > 0)
				PillPic[Pills[i].f+Pills[i].t*4].blit(Math.floor(Pills[i].x+4), Math.floor(Pills[i].y+16));
			
		}
		//blit 2nd layer

		//blit hp and other info
	
		if (Sprite[0].hp >5 && Sprite[0].hp < 10)
		{
			Rectangle(82-(10-Sprite[0].hp)*5, 226, (10-Sprite[0].hp)*5,12,hpcolour);
		}
		else if (Sprite[0].hp < 10)
		{
			Rectangle(82-24-(5-Sprite[0].hp)*4, 226, 24+(5-Sprite[0].hp)*4,12,hpcolour);
		}
		
		if (TotalKills >= 100000)
		{
			font.drawText(177, 226, "Infinity")
		}
		else
		{
			if (TotalKills >= 10000)
				number[(TotalKills-TotalKills%10000)/10000].blit(185, 224); 
			if (TotalKills >= 1000)
				number[(TotalKills%10000-TotalKills%1000)/1000].blit(193, 224);
			if (TotalKills >= 100)
				number[(TotalKills%1000-TotalKills%100)/100].blit(201, 224); 
			if (TotalKills >= 10)
				number[(TotalKills%100-TotalKills%10)/10].blit(209, 224); 
			number[(TotalKills%10)].blit(217, 224); 
		}

		if (Lives >= 99)
		{
			number[9].blit(240, 224);
			number[9].blit(248, 224);
		}
		else if (Lives >= 0)
		{
			if (Lives >= 10)
				number[(Lives-Lives%10)/10].blit(241, 224); 

				number[Lives%10].blit(249, 224); 
		}
		else 
			number[0].blit(249, 224); 
		

		if (TotalKills > highs)
		{
			HighPic.blit(284, 228);
			//lite up icon
		}

/*
			for (g1=1; g1<Kills+1; g1++)
			{
				pill.blit(GetScreenWidth()-pill.width*g1,GetScreenHeight()-pill.height); 
			}
*/
//		font.drawText(0,20, Ingore_Input + " " + Sprite[0].f + " " + (Sprite[0].la + 15) + " " + Frames);

			if (Sprite[0].counter2 > 2 && Sprite[0].counter2 < 11&& Sprite[0].attack == 2 && Kills>2 && Kills < 6)
			{
				if (Sprite[0].ld == 1)
					SpriteSet[3][Sprite[0].counter2-2].transformBlit(Sprite[0].x+52, Sprite[0].y-4,
					Sprite[0].x+20, Sprite[0].y-4,
					Sprite[0].x+20, Sprite[0].y+28,
					Sprite[0].x+52, Sprite[0].y+28);
				else
					SpriteSet[3][Sprite[0].counter2-2].blit(Sprite[0].x-32, Sprite[0].y-4);
			}
			if (Sprite[0].counter2 > 2 && Sprite[0].counter2 < 7&& Sprite[0].attack == 2 && Kills>5 && Kills < 9)
			{
				if (Sprite[0].ld == 1)
					SpriteSet[2][Math.floor((Sprite[0].counter2-1)/2)].transformBlit(Sprite[0].x+84, Sprite[0].y-4,
					Sprite[0].x+20, Sprite[0].y-4,
					Sprite[0].x+20, Sprite[0].y+28,
					Sprite[0].x+84, Sprite[0].y+28);
				else
					SpriteSet[2][Math.floor((Sprite[0].counter2-1)/2)].blit(Sprite[0].x-64, Sprite[0].y-4);
			}

		if (GetTime() - LastGetTime >= FrameSec && Pause == false)
		{
//			for (fs = GetTime() - LastGetTime - FrameSec; fs >=0; fs-= FrameSec)
//			{
			Frames++;
			if (fubar>0)
				fubar--;
				if (DelayScripts[Frames] != undefined && DelayScripts[Frames] != "");
				{
					temp = DelayScripts[Frames];
					DelayScripts[Frames] = "";
					eval(temp);
				}
			UpDate();
//			}
		LastGetTime = GetTime();
		

			if (Frames > dFrames + (15-diff*2)*10 && NumberOfSprites() < Math.floor(diff/2)+2)
			{
				for (i=1; i<MaxSprites; i++)
				{
					if (Sprite[i].hp == 0)
					{
					Sprite[i].hp = 1+Math.floor(diff/2);
					tempy = Math.floor(Math.random()*5);
					Sprite[i].x = Spawn[2*tempy]; 
					Sprite[i].y = Spawn[2*tempy+1];
					Sprite[i].vx = 0;
					Sprite[i].vy = 0; 
					Sprite[i].ss = 1;
					Sprite[i].f = 1;
					Sprite[i].w = 16;
					Sprite[i].h = 24; 
					Sprite[i].bw1 = 8;
					Sprite[i].bh1 = 8;
					Sprite[i].team = 1;
					Sprite[i].attack = 0;
					Sprite[i].counter = 0;
					dFrames = Frames;
					break;
					}
				}
			}

			//Enemy Spawn;


		}
		else if (Pause == true)
		{
			GetSystemFont().drawText(136,110, "Paused");
			GetSystemFont().drawText(88,120, "Press P To Continue");
		}

		//draw the special x
		if (Kills > 2)
			PicX.blit(93, 226);
		if (Kills > 5)
			PicX.blit(107, 226);
		if (Kills > 8)
			PicX.blit(121, 226);
		if (Kills > 11)
			PicX.blit(135, 226);

		if (fubar >0)
			ApplyColorMask(CreateColor(255,255,255, 255/15*fubar));	
						
		if (fun == false && Lives < 0 && Sprite[0].hp == 10)
		{
		Music.stop();
		var gimage = GrabImage(0,0, GetScreenWidth(), GetScreenHeight());
			for (fade = 0; fade < 50; fade++)
			{
				while (GetTime() - LastGetTime < 100/4)
					;

				gimage.blit(0,0);
				ApplyColorMask(CreateColor(255,255,255,fade*255/50));
				font.drawText(110,124, "Game Over");

				FlipScreen();
				Frames++
				LastGetTime = GetTime();
			}
				ApplyColorMask(CreateColor(255,255,255,255));
				font.drawText(110,124, "Game Over");
			gimage = GrabImage(0,0, GetScreenWidth(), GetScreenHeight());
				FlipScreen();
			Delay(500);
			for (fade = 0; fade < 25; fade++)
			{
				while (GetTime() - LastGetTime < 100/4)
					;

				gimage.blit(0,0);
				ApplyColorMask(CreateColor(255,255,255,fade*255/25));
				FlipScreen();
				Frames++
				LastGetTime = GetTime();
			}
			Delay(500);
		
		Music.stop();
		menu(true);
		return;
		}
		//GetInput();
		
		while (AreKeysLeft() == true)
		{
			switch (GetKey())
			{
				case KEY_ESCAPE:
				{

		Music.stop();
		var gimage = GrabImage(0,0, GetScreenWidth(), GetScreenHeight());
			for (fade = 0; fade < 50; fade++)
			{
				while (GetTime() - LastGetTime < 100/4)
					;

				gimage.blit(0,0);
				ApplyColorMask(CreateColor(255,255,255,fade*255/50));

				FlipScreen();
				Frames++
				LastGetTime = GetTime();
			}
		
		Music.stop();
		menu(true);
		return;
				}
				case KEY_P:
				{
					if (Pause == true)
						Pause = false;
					else
						Pause = true;
				break;
				}
				case KEY_ENTER:
				{
				Kills++;
				break;
				}
				case KEY_PAGEUP:
				{
					if (FrameSec < 100)
					{
					FrameSec+=5;
					}
				break;
				}
				case KEY_PAGEDOWN:
				{
					if (FrameSec > 5)
					{
					FrameSec-=5;
					}
				break;
				}
				case KEY_BACKSPACE:
				{
					FrameSec=100/4;
				break;
				}

			}
		}
	FlipScreen();
	}
}

var p_temp = -1;

var person_temp = -1;

function UpDate()
{
	if (Ingore_Input == true && PlayerIsOnGround(0) == true)
	{
		Sprite[0].vx = 0;
	}

	for (sp = 0; sp< MaxSprites; sp++)
	{
		if (Sprite[sp].invince > 0)
		Sprite[sp].invince--;
	}

	if (Frames/8 == Math.floor(Frames/8))
	{
		for (fp = 0; fp < MaxPills; fp++)
		{
			if (Pills[fp].hp > 0)
				Pills[fp].f++;
			if (Pills[fp].f == 4)
				Pills[fp].f = 0;
		}
	}

	//Update Vectors
	for (sp = 0; sp< MaxSprites; sp++)
	{
	p_temp = sp;
		if (Sprite[sp].x >= 0)
		{
			if (Sprite[sp].attack != 0)
				Sprite[sp].counter2++; 

			if (Frames/6 == Math.floor(Frames/6))
			{
				if (Sprite[sp].bc>0)
					Sprite[sp].bc--;
			}
			if (Frames/2 == Math.floor(Frames/2))
			{
				if (Sprite[sp].bc>0)
					Sprite[sp].bc--;
			
				if (Sprite[sp].hp>0)
					Sprite[sp].counter=0;
				
				if (Sprite[sp].hp <0)
				{
					if (Sprite[sp].f > 34 && Sprite[sp].f < 50)
						Sprite[sp].f++
					else if (Sprite[sp].f!= 50) 
						Sprite[sp].f= 35;

					Sprite[sp].injury = false;
					Sprite[sp].counter++;
				}
				else if (Sprite[sp].injury == true)
				{
					Sprite[sp].f = 51;
				}
				else if (Sprite[sp].attack == 1)
				{
					if (Frames/6 == Math.floor(Frames/6))
					{
					if (Sprite[sp].f > 15 && Sprite[sp].f < 18)
						Sprite[sp].f++
					else
						Sprite[sp].f= 16;
					}
				}
				else if (Sprite[sp].attack == 2)
				{
					if (Sprite[sp].f > 27 && Sprite[sp].f < 34)
					Sprite[sp].f++
					else
					Sprite[sp].f= 28;
				}
				else if (Sprite[sp].vx != 0 && PlayerIsOnGround(sp) == true)
				{
					if (Sprite[sp].f > 0 && Sprite[sp].f < 8)
					Sprite[sp].f++
					else
					Sprite[sp].f= 1;
					//Player is on the ground and is moving, advance frames
				}
				else if (PlayerIsOnGround(sp) == false && Sprite[sp].attack == 0)
				{
					if (Sprite[sp].vy < -4)
						Sprite[sp].f = 25;
					else if (Sprite[sp].vy < 3)
						Sprite[sp].f = 26;
					else
						Sprite[sp].f = 27;
					
					//Player is in the air, advance frames according to the speed
				}
				else if (Sprite[sp].attack == 0)
				{
					if (Frames/8 == Math.floor(Frames/8))
					{
						if (Sprite[sp].f > 18 && Sprite[sp].f < 24)
						Sprite[sp].f++;
						else
						Sprite[sp].f= 19;
					}
					//Standing Frame;
				}
				else //if (Sprite[sp].attack == true)
				{
					if (Sprite[sp].f > 9 && Sprite[sp].f < 15)
					Sprite[sp].f++
					else
					Sprite[sp].f= 10;
				}
			}


			Sprite[sp].x += Sprite[sp].vx;
	
			if (Sprite[sp].vx > 0)
			{
				while (IsPointObstructed(Sprite[sp].x + Sprite[sp].w, Sprite[sp].y+Sprite[sp].h, true)==true || IsPointObstructed(Sprite[sp].x + Sprite[sp].w,Sprite[sp].y, true)==true || IsPointObstructed(Sprite[sp].x + Sprite[sp].w, Sprite[sp].y + Sprite[sp].h/2, true)==true)
				{
				Sprite[sp].x--;
				Sprite[sp].vx = 0;
				}
			}
			else if (Sprite[sp].vx < 0)
			{
				while (IsPointObstructed(Sprite[sp].x, Sprite[sp].y+Sprite[sp].h, true)==true || IsPointObstructed(Sprite[sp].x,Sprite[sp].y, true)==true || IsPointObstructed(Sprite[sp].x, Sprite[sp].y+Sprite[sp].h/2, true)==true)
				{
					Sprite[sp].x++;
					Sprite[sp].vx = 0;
				}
			}

			Sprite[sp].y += Sprite[sp].vy;

			if (PlayerIsOnGround(sp) == false && Sprite[sp].vy < 8)
				Sprite[sp].vy += 1;

			if (Sprite[sp].vy > 0)
			{
				while (IsPointObstructed(Sprite[sp].x+Sprite[sp].w, Sprite[sp].y+Sprite[sp].h)==true || IsPointObstructed(Sprite[sp].x,Sprite[sp].y+Sprite[sp].h)==true)
				{
					Sprite[sp].y--;
					Sprite[sp].vy = 0;
				}
//					PlayTheSound(4);
			}
			else if (Sprite[sp].vy < 0)
			{
				while (IsPointObstructed(Sprite[sp].x+Sprite[sp].w, Sprite[sp].y)==true || IsPointObstructed(Sprite[sp].x,Sprite[sp].y)==true)
				{
					Sprite[sp].y++;
					Sprite[sp].vy = 0;
				}
			}

		if (sp>0)
		{
			if (Sprite[sp].vx<0 && PlayerIsOnGround(sp) == true)
			{
			Sprite[sp].vx++;
			}
			else if (Sprite[sp].vx>0 && PlayerIsOnGround(sp) == true)
			{
			Sprite[sp].vx--;
			}
		}

/*
	if (PlayerIsOnGround(0) == false)
	{
		//give negative velocity
		while (IsPointObstructed(Sprite[sp].x,Sprite[sp].y+Sprite[sp].h)==true)
		{
			Sprite[sp].y--;
		}
	}
*/
		}
	}
	

	//Check for pills	
	for (pi = 0; pi<MaxPills; pi++)
	{
		if (Pills[pi].hp > 0)
		{
			if (Sprite[0].x <= Pills[pi].x+27 && Sprite[0].x >= Pills[pi].x && Sprite[0].y <= Pills[pi].y+24 && Sprite[0].y >= Pills[pi].y)
			 TakePill(pi);
			else if (Sprite[0].x + Sprite[0].w <= Pills[pi].x+27 && Sprite[0].x + Sprite[0].w>= Pills[pi].x && Sprite[0].y <= Pills[pi].y+24 && Sprite[0].y >= Pills[pi].y)
			 TakePill(pi);
			else if (Sprite[0].x <= Pills[pi].x+27 && Sprite[0].x >= Pills[pi].x && Sprite[0].y + Sprite[0].h<= Pills[pi].y+24 && Sprite[0].y +Sprite[0].h>= Pills[pi].y)
			 TakePill(pi);
			else if (Sprite[0].x + Sprite[0].w<= Pills[pi].x+27 && Sprite[0].x + Sprite[0].w>= Pills[pi].x && Sprite[0].y  + Sprite[0].h<= Pills[pi].y+24 && Sprite[0].y  + Sprite[0].h>= Pills[pi].y)
			 TakePill(pi);
			
			if (Pills[pi].hp > 0)
				Pills[pi].hp--;
		}
	}

	for (sp = 0; sp< 20; sp++)
	{
		if (Blast[sp].hp > 0 && Blast[sp].f==3)
		{
			Blast[sp].x+=Blast[sp].vx;
			Blast[sp].y+=Blast[sp].vy;
			if (Blast[sp].x < -Blast[sp].w || Blast[sp].x > GetScreenWidth() || IsPointObstructed(Blast[sp].x,Blast[sp].y) == true || IsPointObstructed(Blast[sp].x+Blast[sp].w,Blast[sp].y) == true || IsPointObstructed(Blast[sp].x+Blast[sp].w,Blast[sp].y+Blast[sp].h) == true || IsPointObstructed(Blast[sp].x,Blast[sp].y+Blast[sp].h) == true)
			{
				 Blast[sp].hp = -1;
			}
			else if (IsPointPerson(Blast[sp].x,Blast[sp].y, sp) == true || IsPointPerson(Blast[sp].x+Blast[sp].w,Blast[sp].y, sp) == true || IsPointPerson(Blast[sp].x+Blast[sp].w,Blast[sp].y+Blast[sp].h, sp) == true || IsPointPerson(Blast[sp].x,Blast[sp].y+Blast[sp].h, sp) == true|| IsPointPerson(Blast[sp].x+Blast[sp].w/4,Blast[sp].y+Blast[sp].h/2, sp) == true || IsPointPerson(Blast[sp].x+Blast[sp].w/2,Blast[sp].y+Blast[sp].h/2, sp) == true || IsPointPerson(Blast[sp].x + 3*Blast[sp].w/4,Blast[sp].y+Blast[sp].h/2, sp) == true)
			{
				if (Sprite[person_temp].hp > 0 && Sprite[person_temp].team != Blast[sp].team)
				{
					Sprite[person_temp].hp -= Blast[sp].hp;
//					Blast[sp].hp = -5;

							if (Sprite[person_temp].hp <= 0)
							{
							PlayTheSound(1);
							Sprite[person_temp].vx= -3;
							Sprite[person_temp].vy= -4;
							Sprite[person_temp].hp = -1;
								if (Sprite[0].ld == 0)
									Sprite[person_temp].ld = 1;
								else
								{
									Sprite[person_temp].ld = 0;
									Sprite[person_temp].vx= 3;
								}

								if (person_temp == 0)
									Lives--;
								else 
									TotalKills++;

								if (person_temp == 0)
									DelayScript(30, "Sprite["+person_temp+"].hp = 10;Sprite["+person_temp+"].x = 10; Sprite["+person_temp+"].y = 0;Sprite["+person_temp+"].vx = 0;Sprite["+person_temp+"].vy = 0; Sprite["+person_temp+"].ss = 0;Sprite["+person_temp+"].f = 1;Sprite["+person_temp+"].w = 16;Sprite["+person_temp+"].h = 24;Sprite["+person_temp+"].bw1 = 8;Sprite["+person_temp+"].bh1 = 8;Sprite["+person_temp+"].team = 0; Sprite["+person_temp+"].attack = 0;");
								//dead
							}
							else
							{
								PlayTheSound(2);
							}
					}
			}


/*
			if (Blast[sp].vx == 0)
			{
				Blast[sp].hp = 0;
			}
*/
		}
		else if (Blast[sp].hp <0)
		{
			if (Frames/2 == Math.floor(Frames/2))
				Blast[sp].f++;
			if (Blast[sp].f == 7)
				Blast[sp].hp = 0;
		}
	}

	if (Sprite[0].hp <0 && Sprite[0].vx<0 && PlayerIsOnGround(0) == true)
	{
		Sprite[0].vx++;
	}
	else if (Sprite[0].hp <0 && Sprite[0].vx>0 && PlayerIsOnGround(0) == true)
	{
		Sprite[0].vx--;
	}

	if (Sprite[0].attack == 0 && Sprite[0].hp>0)
	{
		if (IsKeyPressed(KEY_LEFT) == true && Ing_left == false)
		{
			Sprite[0].ld = 0;
			if (PlayerIsOnGround(0) == true)
				Sprite[0].vx= -3;
			else if (Sprite[0].vx > -3)
				Sprite[0].vx--;

				if (Sprite[0].x < 0)
					Sprite[0].x = 0;
		}
		else if (Sprite[0].vx<0 && PlayerIsOnGround(0) == true)
		{
			Sprite[0].vx++;
		}

		if (IsKeyPressed(KEY_RIGHT) == true && Ing_right == false/* && PlayerIsOnGround(0) == true*/)
		{
			Sprite[0].ld = 1;
			if (PlayerIsOnGround(0) == true)
				Sprite[0].vx= 3;
			else if (Sprite[0].vx < 3)
				Sprite[0].vx++;

				if (Sprite[0].x > GetScreenWidth()-Sprite[0].w)
					Sprite[0].x = GetScreenWidth()-Sprite[0].w;
		}
		else if (Sprite[0].vx>0 && PlayerIsOnGround(0) == true)
		{
			Sprite[0].vx--;
		}

		if (IsKeyPressed(KEY_UP) == false && PlayerIsOnGround(0) == false && Sprite[0].vy<0)
		{
			Sprite[0].vy++;
		}

		if (IsKeyPressed(KEY_UP) == true && PlayerIsOnGround(0) == true && Jump == false)
		{
			//jump!
			Sprite[0].vy= -10;
			DelayScript(4, "Sprite[0].jd = 1;");
			Jump = true;
			PlayTheSound(3);
		}
		else if (IsKeyPressed(KEY_UP) == true && PlayerIsOnGround(0) == false && IsPointObstructed(Sprite[0].x-1,Sprite[0].y, true) == true && Math.abs(Sprite[0].vy) <= 2)
		{
			DelayScript(4, "Sprite[0].jd = 1;");
			Sprite[0].vx= 4;
			Sprite[0].vy= -6;
			Sprite[0].ld = 1;
			PlayTheSound(3);
			Ing_left = true;
			//Jump to the right
		}
		else if (IsKeyPressed(KEY_UP) == true && PlayerIsOnGround(0) == false && IsPointObstructed(Sprite[0].x+Sprite[0].w+1,Sprite[0].y, true) == true && Math.abs(Sprite[0].vy) <= 2)
		{
			DelayScript(4, "Sprite[0].jd = 1;");
			Sprite[0].vx = -4;
			Sprite[0].vy = -6;
			Sprite[0].ld = 0;
			PlayTheSound(3);

			Ing_right = true;
			//Jump to the left 
		}
		else if (IsKeyPressed(KEY_UP) == false)
		{
			Jump = false;
		}

		if (IsKeyPressed(KEY_LEFT) == false)
		{
		Ing_left = false;
		}
		if (IsKeyPressed(KEY_RIGHT) == false)
		{
		Ing_right = false;
		}

		if (Sprite[0].vx == 0 && Sprite[0].vy == 0)
		{
		Ing_left = false;
		Ing_right = false;		
		}
	
		if (IsKeyPressed(KEY_CTRL) == true && Fire == false)
		{
			Attack(0,1);
			Fire = true;
		}
		if (IsKeyPressed(KEY_CTRL) == false)
		{
			Fire = false;
		}

		if (IsKeyPressed(KEY_ALT) == true && SFire == false)
		{
			Attack(0,2);
			SFire = true;
		}
		if (IsKeyPressed(KEY_ALT) == false)
		{
			SFire = false;
		}
	}

	if (Sprite[0].counter2 < 15 && Sprite[0].counter2 != 0)
	{
		if (Sprite[0].hp <=0)
		{
			Sprite[0].attack = 0;
			Sprite[0].counter2 = 0;				
		}
		else if (Sprite[0].attack == 1 || Kills <3)
		{
		Sprite[0].attack = 1;
			if (Sprite[0].counter2 == 1)
				PlayTheSound(6);
			if (Sprite[0].counter2 == 6)
				CheckAttack(0);
			else if (Sprite[0].counter2 == 14)
			{
				Ingore_Input = false;
				Sprite[0].attack = 0;
				Sprite[0].f = 9;
				Sprite[0].counter2 = 0;			
			}
		}
		else if (Kills <6)
		{
			Sprite[0].attack = 2;
			if (Sprite[0].counter2 == 1)
				PlayTheSound(9);
			if (Sprite[0].counter2 == 3)
				CheckAttack(0,0);
			else if (Sprite[0].counter2 == 7)
			{
				CheckAttack(0, 32);
				CheckAttack(0, 32);
				CheckAttack(0, 16);
				CheckAttack(0, 16);
				CheckAttack(0, 0);
			}
			else if (Sprite[0].counter2 == 14)
			{
				Sprite[0].attack = 0;
				Sprite[0].f = 9;
				Sprite[0].counter2 = 0;
				Ingore_Input = false;
				Kills-=3;
			}

		}
		else if (Kills<9)
		{
			if (Sprite[0].counter2 == 1)
				PlayTheSound(10);
				if (Sprite[0].counter2 == 6)
					SpawnProjectile(0);
				else if (Sprite[0].counter2 == 5)
					CheckAttack(0);
				else if (Sprite[0].counter2 == 8)
				{
					Kills-=6;
					CheckAttack(0);
				}
				else if (Sprite[0].counter2 == 15)
				{
					Sprite[0].attack = 0;
					Sprite[0].f = 9;
					Sprite[0].counter2 = 0;
					Ingore_Input = false;
				}
		}
		else if (Kills<12)
		{
			if (Sprite[0].counter2 == 1)
				PlayTheSound(11);
				//invincable for a few seconds.
				if (Sprite[0].counter2 == 3)
					CheckAttack(0);
				else if (Sprite[0].counter2 == 8)
				{
					Kills-=9;
					CheckAttack(0);
					Sprite[0].invince = 400;
				}
				else if (Sprite[0].counter2 == 15)
				{
					Sprite[0].attack = 0;
					Sprite[0].f = 9;
					Sprite[0].counter2 = 0;
					Ingore_Input = false;
				}
		}
		else if (Kills >= 12)
		{
			if (Sprite[0].counter2 == 1)
				PlayTheSound(12);
				//Mega fubar
				if (Sprite[0].counter2 == 3)
					CheckAttack(0);
				else if (Sprite[0].counter2 == 8)
				{
					Kills-=12;
					CheckAttack(0);
					HitAll();
					fubar = 15;
				}
				else if (Sprite[0].counter2 == 15)
				{
					Sprite[0].attack = 0;
					Sprite[0].f = 9;
					Sprite[0].counter2 = 0;
					Ingore_Input = false;
				}
		}
	}
	else if (Sprite[0].attack !=0)
	{
		Sprite[0].attack = 0;
		Sprite[0].counter2 = 0;
		Ingore_Input = false;
	}
	
	if (Sprite[0].attack == 0 && Ingore_Input == true)
	{
		Ingore_Input = false;
	}
	
	
	if (Sprite[0].counter > 15)
	{
		Sprite[0].hp = 10;
		Sprite[0].x = 10; 
		Sprite[0].y = 0;
		Sprite[0].vx = 0;
		Sprite[0].vy = 0; 
		Sprite[0].ss = 0;
		Sprite[0].f = 1;
		Sprite[0].w = 16;
		Sprite[0].h = 24; 
		Sprite[0].bw1 = 8;
		Sprite[0].bh1 = 8;
		Sprite[0].team = 1;
		Sprite[0].attack = 0;
		Sprite[0].counter = 0;
	}
	//AI time
	for (ai=1; ai<MaxSprites; ai++)
	{
		if (Sprite[ai].hp > 0 && Sprite[0].hp > 0)
		{
			if (PlayerIsOnGround(ai) == true)
			{
				//Move Towards the Player
				if (Sprite[0].y+Sprite[0].h < Sprite[ai].y && Sprite[ai].x <16 && (Sprite[ai].y < 90 || Sprite[ai].y > 170))
				{
					Sprite[ai].ld = 1;
					Sprite[ai].vx = 3; 					Sprite[ai].vy= -10;
					PlayTheSound(3);
					DelayScript(4, "Sprite["+ai+"].jd = 1;");
				}
				else if ((Sprite[0].x >83 || Sprite[0].y > 170)&& Sprite[ai].x > 68 && Sprite[ai].x < 83&& Sprite[ai].y < 64 && Sprite[ai].y > 42)
				{
					Sprite[ai].ld = 1;
					Sprite[ai].vx = 3; 					Sprite[ai].vy= -10;
					PlayTheSound(3);
					DelayScript(4, "Sprite["+ai+"].jd = 1;");
					DelayScript(4, "Sprite["+ai+"].vx = 2;");
					DelayScript(8, "Sprite["+ai+"].vx = 2;");
				}
				else if ((Sprite[ai].x< 49 && Sprite[ai].y >90&& Sprite[ai].y < 150)&& Sprite[ai].y > Sprite[0].y && Sprite[0].y <50&& Sprite[0].x<180)
				{
					Sprite[ai].ld = 0;
					Sprite[ai].vx = -1; 					Sprite[ai].vy= -10;
					PlayTheSound(3);
					DelayScript(4, "Sprite["+ai+"].jd = 1;");
				}
				else if (Sprite[0].x <110&&Sprite[0].x >70 && Sprite[0].y < 32 && Sprite[ai].x > 128 && Sprite[ai].x < 182 && Sprite[ai].y <83 && Sprite[ai].y > 56)
				{
					Sprite[ai].ld = 0;
					Sprite[ai].vx = 0; 					Sprite[ai].vy= -10;
					PlayTheSound(3);
					DelayScript(2, "Sprite["+ai+"].vx = 0;");
				}
				else if (Sprite[0].x <110&&Sprite[0].x >70 && Sprite[0].y < 32 && Sprite[ai].x > 111 && Sprite[ai].x < 140 && Sprite[ai].y < 48)
				{
					Sprite[ai].ld = 0;
					Sprite[ai].vx = -3; 					Sprite[ai].vy= -7;
					PlayTheSound(3);
				}
				else if (Sprite[ai].x <110&&Sprite[ai].x >70 && Sprite[ai].y < 32 && Sprite[0].x > 111 && Sprite[0].x < 140 && Sprite[0].y < 48)
				{
					Sprite[ai].ld = 1;
					Sprite[ai].vx = 3; 					Sprite[ai].vy= -5;
					PlayTheSound(3);
				}


				else if(Sprite[0].x >= Sprite[ai].x && Sprite[0].x <= Sprite[ai].x - Sprite[ai].bw1 + SpriteSet[Sprite[ai].ss][Sprite[ai].f].width && Sprite[ai].y+Sprite[ai].h/2 <= Sprite[0].y+Sprite[0].h && Sprite[ai].y+Sprite[ai].h/2 > Sprite[0].y)//to the right
				{
					Sprite[ai].ld = 1;
					if (Sprite[ai].attack == 0 && Sprite[0].hp >0)
					{
						Attack(ai, 1);
						Sprite[ai].vx = 0;
					}
				}
				else if(Sprite[0].x >= Sprite[ai].x+24)//to the right
				{
					if (Sprite[0].y + Sprite[0].h> Sprite[ai].y)
						Move(ai, 1);
					else
						Move(ai, 1);
					
				}
				//else if(Sprite[0].x <= Sprite[ai].x && Sprite[0].x >= Sprite[ai].x -Sprite[ai].bw1 + SpriteSet[Sprite[ai].ss][Sprite[ai].f].width)//to the right
				else if(Sprite[0].x + 24 >= Sprite[ai].x && Sprite[0].x <= Sprite[ai].x && Sprite[ai].y+Sprite[ai].h/2 <= Sprite[0].y+Sprite[0].h && Sprite[ai].y+Sprite[ai].h/2 > Sprite[0].y)//to the right
				{
					Sprite[ai].ld = 0;
					if (Sprite[ai].attack == 0 && Sprite[0].hp >0)
					{
						Attack(ai, 1);
						Sprite[ai].vx = 0;
					}
				}
				else if(Sprite[0].x +24<= Sprite[ai].x)
				{
					if (Sprite[0].y + Sprite[0].h> Sprite[ai].y)
						Move(ai, 0);
					else
						Move(ai, 0);
				}
				
				if (Sprite[0].y + Sprite[0].h< Sprite[ai].y&& PlayerIsOnGround(ai) == true && CheckPlatform(ai) >= 0)
				{
					if (Sprite[ai].vx == 0)						Sprite[ai].vx= CheckPlatformX(ai, CheckPlatform(ai));
				Sprite[ai].vy= -10;
					PlayTheSound(3);
				DelayScript(4, "Sprite["+ai+"].jd = 1;");
				//jump
				}
				else if (Sprite[ai].y + Sprite[ai].h< Sprite[0].y)
				{
					Sprite[ai].ld = CheckGoingDown(ai);
					if (Sprite[ai].ld == 0)
						DelayScript(1, "Sprite["+ai+"].vx = -3;");
					else
						DelayScript(1, "Sprite["+ai+"].vx = 3;");
				Move(ai, Sprite[ai].ld);				
				}
			}
		}

		if (Sprite[ai].counter2 < 15 && Sprite[ai].counter2 > 0)
		{
			if (Sprite[ai].hp <= 0)
			{
				Sprite[ai].counter2 = 0;
				Sprite[ai].attack = 0;
			}
			else if (Sprite[ai].attack == 1)
			{
			Sprite[ai].attack = 1;
			if (Sprite[ai].counter2 == 1)
				PlayTheSound(0);
				if (Sprite[ai].counter2 == 6)
					CheckAttack(ai);
				else if (Sprite[ai].counter2 == 14)
				{
					Sprite[ai].attack = 0;
					Sprite[ai].f = 9;
					Sprite[ai].counter2 = 0;
				}
			}
			else if (Sprite[ai].attack == 2)
			{
				Sprite[ai].attack = 1;
				if (Sprite[ai].counter2 == 3)
					CheckAttack(ai);
				if (Sprite[ai].counter2 == 8)
				{
				CheckAttack(ai);
				}
				else if (Sprite[ai].counter2 == 15)
				{
					Sprite[ai].attack = 0;
					Sprite[ai].f = 9;
					Sprite[ai].counter2 = 0;
				}
			}
			else// if (Kills<3)
			{
				//projecttile!

				if (Sprite[ai].counter2 == 1)
					SpawnProjectile(ai);
				else if (Sprite[ai].counter2 == 3)
					CheckAttack(ai);
				else if (Sprite[ai].counter2 == 8)
				{
					CheckAttack(ai);
				}
				else if (Sprite[ai].counter2 == 15)
				{
					Sprite[ai].attack = 0;
					Sprite[ai].f = 9;
					Sprite[ai].counter2 = 0;
				}
			}
		}
		/*
			if (Sprite[ai].attack == 1)
			{
			Sprite[num].attack = 1;
			DelayScript(6, "CheckAttack(" + num+");");
				if (num == 0)
				DelayScript(14, "Ingore_Input = false;Sprite["+num+"].attack = 0;");
			DelayScript(15, "Sprite["+num+"].attack = 0;Sprite["+num+"].f = 9;Sprite["+num+"].counter2 = 0;");
			}
			else if (attack == 2)
			{
				if (Kills<2)
				{
					Kills--;
					DelayScript(3, "CheckAttack(" + num+");");
					DelayScript(6, "CheckAttack(" + num+");");
					DelayScript(8, "Ingore_Input = false;Sprite["+num+"].attack = 0;Sprite["+num+"].counter2 = 0;");
				}
				else// if (Kills<3)
				{
					//projecttile!
					Kills-=2;
					SpawnProjectile(num);
					DelayScript(3, "CheckAttack(" + num+");");
					DelayScript(6, "CheckAttack(" + num+");");
					DelayScript(8, "Ingore_Input = false;Sprite["+num+"].attack = 0;Sprite["+num+"].counter2 = 0;");
				}
			}
		}
		*/
		if (Sprite[ai].counter > 15)
		{
			LeavePill(ai);
			Sprite[ai].hp = 0;
			Sprite[ai].counter = 0;
		}
	}
p_temp = -1;
}


function PlayerIsOnGround(num)
{
p_temp = num;
	if (IsPointObstructed(Sprite[num].x,Sprite[num].y+Sprite[num].h+1) == true || IsPointObstructed(Sprite[num].x+Sprite[num].w,Sprite[num].y+Sprite[num].h+1) == true)
	{
	Sprite[num].jd = 0;
	Sprite[num].injury = false;
		return true;
	}

	return false;
}

var person_temp = -1;

function IsPointObstructed(x,y,xboo)
{
	if (x < 0 || x > GetScreenWidth() || y < -100 || y > GetScreenHeight())
	//point is outside the screen;
		return true;

	for (is=0; is<MaxObstruct; is++)
	{
		if (Obstruct[is].x >= 0)//ie, it's defined
		{
			if (x>=Obstruct[is].x && x<=(Obstruct[is].x+Obstruct[is].w) && y>= Obstruct[is].y && y<= Obstruct[is].y+Obstruct[is].h && Obstruct[is].t == 0)
				return true;
			else if (x>=Obstruct[is].x && x<=(Obstruct[is].x+Obstruct[is].w) && y>= Obstruct[is].y && y<= Obstruct[is].y+Obstruct[is].h && Obstruct[is].t == 1)
			{
				if ((Sprite[p_temp].vy >= 0)&& xboo !=true)// || Sprite[p_temp].y + Sprite[p_temp].h <= Obstruct[is].y)
				{
					return true;
					if (Sprite[p_temp].vy>= 6)
						return true;
					else if ((Sprite[p_temp].y + Sprite[p_temp].h >Obstruct[is].y+4))
					{
						 if (Sprite[p_temp].vy >= 4)
							return true;
					}
					else
					{
					return true;
					}
				}
			}	
		}
	}
	return false;
}

var person_temp = -1;

function IsPointPerson(x,y, blast)
{
	for (is=0; is<MaxSprites; is++)
	{
		if (Sprite[is].x >= 0)//ie, it's defined
		{
			if (x>=Sprite[is].x -8&& x-8<=(Sprite[is].x+Sprite[is].w) && y>= Sprite[is].y -8&& y-8<= Sprite[is].y+Sprite[is].h&&Blast[blast].team != Sprite[is].team)
			{
				person_temp = is;
				return true;
			}
		}
	}
	return false;
}


function Attack(num, attack)
{
Sprite[num].la = Frames;
	if (num == 0)
		Ingore_Input = true;
	Sprite[num].attack = attack;
	Sprite[num].counter2 = 1;
/*	if (attack == 1 || Kills < 1)
	{
	Sprite[num].attack = 1;
	DelayScript(6, "CheckAttack(" + num+");");
		if (num == 0)
			DelayScript(14, "Ingore_Input = false;Sprite["+num+"].attack = 0;");
	DelayScript(15, "Sprite["+num+"].attack = 0;Sprite["+num+"].f = 9;Sprite["+num+"].counter2 = 0;");
	}
	else if (attack == 2)
	{
		if (Kills<2)
		{
			Kills--;
			DelayScript(3, "CheckAttack(" + num+");");
			DelayScript(6, "CheckAttack(" + num+");");
			DelayScript(8, "Ingore_Input = false;Sprite["+num+"].attack = 0;Sprite["+num+"].counter2 = 0;");
		}
		else// if (Kills<3)
		{
			//projecttile!
			Kills-=2;
			SpawnProjectile(num);
			DelayScript(3, "CheckAttack(" + num+");");
			DelayScript(6, "CheckAttack(" + num+");");
			DelayScript(8, "Ingore_Input = false;Sprite["+num+"].attack = 0;Sprite["+num+"].counter2 = 0;");
		}
		
		if (num == 0)
	DelayScript(9, "Sprite["+num+"].attack = 0;Sprite["+num+"].counter2 = 0;Sprite["+num+"].f = 9;");
	}
*/
}

function CheckAttack(num, added)
{
var tempx = 0;
var tempy = 0;
var override = false;
	if (added == undefined)
		added = 0;
	else
		override = true;//overrides the injury condition

	if (PlayerIsOnGround(num) == false)
	{
	}
	if (Sprite[num].ld == 0)
	{
		//attack left
		for (ca=0; ca<MaxSprites;ca++)
		{
			if (ca!=num && Sprite[num].team != Sprite[ca].team)
			{
					for (ka = -3; ka<=0; ka++)
					{
					tempx = Sprite[num].x-added+ka*Sprite[num].bw1/3;
					tempy = Sprite[num].y+Sprite[num].h/2;

					if (Sprite[ca].x <= tempx && Sprite[ca].x+Sprite[ca].w >= tempx && Sprite[ca].y <= tempy && Sprite[ca].y+Sprite[ca].h >= tempy && Sprite[ca].hp >0&& (Sprite[ca].injury == false || override == true))
					{

						Sprite[ca].injury = true;
						Sprite[ca].hp--;
							if (Sprite[ca].invince > 0)
							{
								Sprite[ca].hp++;
								Sprite[ca].injury = false;
							}
							else
							{
								Sprite[ca].bc = 6;
								Sprite[ca].vx= -3;
								Sprite[ca].vy= -4;
							}

						if (Sprite[ca].hp == 0)
						{
							if (ca == 0)
								PlayTheSound(7);
							else
								PlayTheSound(1);

						Sprite[ca].hp = -1;
						Sprite[ca].ld = 1;
						Sprite[ca].speed = 2+Math.random()*3;
							if (ca == 0)
								Lives--;
							else 
								TotalKills++;
							
							if (ca == 0)
								DelayScript(30, "Sprite["+ca+"].hp = 10;Sprite["+ca+"].x = 10; Sprite["+ca+"].y = 0;Sprite["+ca+"].vx = 0;Sprite["+ca+"].vy = 0; Sprite["+ca+"].ss = 0;Sprite["+ca+"].f = 1;Sprite["+ca+"].w = 16;Sprite["+ca+"].h = 24;Sprite["+ca+"].bw1 = 8;Sprite["+ca+"].bh1 = 8;Sprite["+ca+"].team = 0; Sprite["+ca+"].attack = 0;");
						
							//dead
						}
						else if (Sprite[ca].invince <= 0)
						{
							if (ca == 0)
								PlayTheSound(8);
							else
								PlayTheSound(2);
						}

						break;
					}
				}
			}
		}
	}
	else
	{
		for (ca=0; ca<MaxSprites;ca++)
		{
			if (ca!=num && Sprite[num].team != Sprite[ca].team)
			{
					for (ka = 0; ka<4; ka++)
					{
					tempx = Sprite[num].x+added+Sprite[num].w+ka*Sprite[num].bw1/3;
					tempy = Sprite[num].y+Sprite[num].h/2;

					if (Sprite[ca].x <= tempx && Sprite[ca].x+Sprite[ca].w >= tempx && Sprite[ca].y <= tempy && Sprite[ca].y+Sprite[ca].h >= tempy && Sprite[ca].hp >0 && (Sprite[ca].injury == false || override == true))
					{
						Sprite[ca].hp--;

						Sprite[ca].injury = true;
							if (Sprite[ca].invince > 0)
							{
								Sprite[ca].hp++;
								Sprite[ca].injury = false;
							}
							else
							{
								Sprite[ca].vx= 3;
								Sprite[ca].vy= -4;
								Sprite[ca].bc = 6;
							}
						
						if (Sprite[ca].hp == 0)
						{
							if (ca == 0)
								PlayTheSound(7);
							else
								PlayTheSound(1);

						Sprite[ca].vx= 3;
						Sprite[ca].vy= -4;
						Sprite[ca].hp = -1;
						Sprite[ca].ld = 0;
						Sprite[ca].speed = 2+Math.random()*3;
							if (ca == 0)
								Lives--;
							else 
								TotalKills++;

							if (ca == 0)
								DelayScript(30, "Sprite["+ca+"].hp = 10;Sprite["+ca+"].x = 10; Sprite["+ca+"].y = 0;Sprite["+ca+"].vx = 0;Sprite["+ca+"].vy = 0; Sprite["+ca+"].ss = 0;Sprite["+ca+"].f = 1;Sprite["+ca+"].w = 16;Sprite["+ca+"].h = 24;Sprite["+ca+"].bw1 = 8;Sprite["+ca+"].bh1 = 8;Sprite["+ca+"].team = 0; Sprite["+ca+"].attack = 0;");
							//dead
						}
						else if (Sprite[ca].invince <= 0)
						{
							if (ca == 0)
								PlayTheSound(8);
							else
								PlayTheSound(2);
						}
					break;
					}
				}
			}
		}
	}
}
	
function DelayScript(frames, script)
{
	DelayScripts[Frames+frames] = script;
}

function Move(player, num, move2)
{
	if (num == 0)
	{
		Sprite[player].ld = 0;
		if (PlayerIsOnGround(player) == true)
			Sprite[player].vx= -1*Sprite[player].speed;

		else if (Sprite[player].vx > -1*Sprite[player].speed)
			Sprite[player].vx--;

		if (Sprite[player].x < 0)
			Sprite[player].x = 0;
		
		if (move2 == true)
		{
			for (is1 = 0; is1 <MaxObstruct; is1++)
			{ 
				if (Sprite[player].x-5 >= Obstruct[is1].x && Sprite[player].x-5 <= (Obstruct[is1].x+Obstruct[is1].w) && Sprite[player].y >= Obstruct[is1].y && Sprite[player].y <= Obstruct[is1].y + Obstruct[is1].h)
				{
					break;
				}
			}
	
			if (is1 == MaxObstruct)
			{
				Sprite[ai].vy= -10;
				PlayTheSound(3);
				DelayScript(4, "Sprite["+ai+"].jd = 1;");
				//jump
			}
		}
	}
	else if (num == 1)
	{
		Sprite[player].ld = 1;
		if (PlayerIsOnGround(player) == true)
			Sprite[player].vx= Sprite[player].speed;
		else if (Sprite[player].vx < Sprite[player].speed)
			Sprite[player].vx++;

		if (Sprite[player].x > GetScreenWidth()-Sprite[player].w)
			Sprite[player].x = GetScreenWidth()-Sprite[player].w;

		if (move2 == true)
		{
			for (is1 = 0; is1 <MaxObstruct; is1++)
			{ 
				if (Sprite[player].x+Sprite[player].w+5 >= Obstruct[is1].x && Sprite[player].x+Sprite[player].w+5 <= (Obstruct[is1].x+Obstruct[is1].w) && Sprite[player].y >= Obstruct[is1].y && Sprite[player].y <= Obstruct[is1].y + Obstruct[is1].h)
				{
					break;
				}
			}

			if (is1 == MaxObstruct)
			{
				Sprite[ai].vy= -10;
					PlayTheSound(3);
				DelayScript(4, "Sprite["+ai+"].jd = 1;");
				//jump
			}
		}
	}
}

function CheckPlatform(cp)
{
var jw = 64; 
	for (i=0; i<=55; i+=5)
	{
		for (is = 0; is<MaxObstruct; is++)
		{
			if (Sprite[cp].x >= Obstruct[is].x- jw&& Sprite[cp].x <= (Obstruct[is].x+Obstruct[is].w+jw) && Sprite[cp].y-i >= Obstruct[is].y && Sprite[cp].y-i <= Obstruct[is].y + Obstruct[is].h)
			{
				return is;
			}
		}
	}
return -1;
}

function CheckPlatformX(cp,is)
{	if (Sprite[cp].x >= Obstruct[is].x && Sprite[cp].x <= Obstruct[is].x+Obstruct[is].w)
		return 0;
	else if (Sprite[cp].x >Obstruct[is].x+Obstruct[is].w)
		return -3;
	else
		return 3;
}

function CheckGoingDown(cg)
{
	for (cgi = 0; cgi <100; cgi+= 8)
	{
	//to the left
		if (IsPointObstructed(Sprite[cg].x-cgi,Sprite[cg].y+Sprite[cg].h+1) == false)//|| IsPointObstructed(Sprite[cg].x-cgi+Sprite[cg].w,Sprite[cg].y+Sprite[cg].h+1) == true)
		{
		return 0; 
		}

		if (IsPointObstructed(Sprite[cg].x+cgi+Sprite[cg].w,Sprite[cg].y+Sprite[cg].h+1) == false)// || IsPointObstructed(Sprite[cg].x+cgi+Sprite[cg].w,Sprite[cg].y+Sprite[cg].h+1) == true)
		{
		return 1; 
		}

	}
}


function LeavePill(spr)
{
var temp = Math.floor(Math.random()*2.07);
//	if (temp == 1)
//		Kills--;
	
	for (lp = 0; lp< MaxPills; lp++)
	{
		if (Pills[lp].hp <= 0 && (Kills < 15 || temp != 0))
		{
			Pills[lp].t = temp;
			Pills[lp].hp = 200;
			Pills[lp].x = Sprite[spr].x;
			Pills[lp].y = Sprite[spr].y;
			Pills[lp].f = 0;
			break;
		}
	}
}

function SpawnProjectile(num)
{
	for (spi=0; spi<MaxBlasts; spi++)
	{
		if (Blast[spi].hp == 0)
		{
			Blast[spi].hp = 5;
				if (Sprite[num].ld == 0)
					Blast[spi].vx = -7;
				else 
					Blast[spi].vx = 7;
	
			Blast[spi].ld = Sprite[num].ld;
			Blast[spi].vy = 0;
				if (Blast[spi].ld==0)
					Blast[spi].x = Sprite[num].x-64;
				else
					Blast[spi].x = Sprite[num].x+20;
				
			Blast[spi].y = Sprite[num].y+11;
			Blast[spi].ss = 2;
			Blast[spi].w = 56;
			Blast[spi].h = 6;
			Blast[spi].f = 3;
			Blast[spi].team = Sprite[num].team;
		break;
		}
	}
}

function TakePill()
{
	Pills[pi].hp = 0;

	if (Pills[pi].t == 0)
		Kills++;
	else if (Pills[pi].t == 1)
	{
		Sprite[0].hp += 2;
			if (Sprite[0].hp > 10)
				Sprite[0].hp = 10;
	}
	else
		Lives++;
}

function NumberOfSprites()
{
var count = 0;
	for (no=1; no<MaxSprites; no++)
	{
		if (Sprite[no].hp > 0)
			count++;
	}
	return count;
}

function HitAll()
{
	for (ha = 1; ha<MaxSprites; ha++)
	{
		if (Sprite[ha].hp > 0)
		{
			PlayTheSound(2);
			Sprite[ha].hp -= 5;
			Sprite[ha].injury = true;
			Sprite[ha].bc = 6;

			if (Sprite[ha].x < Sprite[0].x)
			{
				Sprite[ha].vx= 3;
				Sprite[ha].vy= -4;
				Sprite[ha].ld = 1;
			}
			else
			{
				Sprite[ha].vx= 3;
				Sprite[ha].vy= -4;
				Sprite[ha].ld = 0;
			}
			
			if (Sprite[ha].hp <= 0)
			{













				PlayTheSound(1);
				Sprite[ha].hp = -1;
				Sprite[ha].speed = 2+Math.random()*3;
				TotalKills++;
			}
		}
	}
}


function PlayTheSound(num)
{
	if (TheSound[num].isPlaying() == true)
		TheSound[num].stop();
	TheSound[num].play(false);
}