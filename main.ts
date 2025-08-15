input.onButtonPressed(Button.A, function () {
    images.createImage(`
        . . . . .
        . . . . .
        # # . # #
        . . . . .
        . . . . .
        `).showImage(0, 0)
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "If [0|360] is jittery, insure battery at 75% power min."
    )
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "GeekServo-360-Degrees-2kg:360-degrees(not 180-degrees)"
    )
    quest_Note_2.quest_Show_String_For_Note_Big_Func(
    "Below Moddable: S7_ServoArm_Left"
    )
    quest_Motors.quest_Set_AutoDegrees_ForServoArm_BIG_Func(
    quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left,
    quest_ServoArm_DegreesInDirection_Enum.Degree_000_Down,
    quest_Debug_Show_Enum.Dashboard_OLED
    )
    quest_Note_2.quest_Show_String_For_Note_Big_Func(
    "Below Moddable: S6_ServoArm_Right"
    )
    quest_Motors.quest_Set_AutoDegrees_ForServoArm_BIG_Func(
    quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right,
    quest_ServoArm_DegreesInDirection_Enum.Degree_000_Down,
    quest_Debug_Show_Enum.Dashboard_OLED
    )
})
input.onButtonPressed(Button.AB, function () {
    images.createImage(`
        . # . # .
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 0)
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "If [0|360] is jittery, insure battery at 75% power min."
    )
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "GeekServo-360-Degrees-2kg:360-degrees(not 180-degrees)"
    )
    quest_Note_2.quest_Show_String_For_Note_Big_Func(
    "Below Moddable: S7_ServoArm_Left"
    )
    quest_Motors.quest_Set_AutoDegrees_ForServoArm_BIG_Func(
    quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left,
    quest_ServoArm_DegreesInDirection_Enum.Degree_090_Up_Full,
    quest_Debug_Show_Enum.Dashboard_OLED
    )
    quest_Note_2.quest_Show_String_For_Note_Big_Func(
    "Below Moddable: S6_ServoArm_Right"
    )
    quest_Motors.quest_Set_AutoDegrees_ForServoArm_BIG_Func(
    quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right,
    quest_ServoArm_DegreesInDirection_Enum.Degree_090_Up_Full,
    quest_Debug_Show_Enum.Dashboard_OLED
    )
})
input.onButtonPressed(Button.B, function () {
    images.createImage(`
        # . . . #
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0, 0)
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "If [0|360] is jittery, insure battery at 75% power min."
    )
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "GeekServo-360-Degrees-2kg:360-degrees(not 180-degrees)"
    )
    quest_Note_2.quest_Show_String_For_Note_Big_Func(
    "Below Moddable: S7_ServoArm_Left"
    )
    quest_Motors.quest_Set_AutoDegrees_ForServoArm_BIG_Func(
    quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left,
    quest_ServoArm_DegreesInDirection_Enum.Degree_045_Up_Half,
    quest_Debug_Show_Enum.Dashboard_OLED
    )
    quest_Note_2.quest_Show_String_For_Note_Big_Func(
    "Below Moddable: S6_ServoArm_Right"
    )
    quest_Motors.quest_Set_AutoDegrees_ForServoArm_BIG_Func(
    quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right,
    quest_ServoArm_DegreesInDirection_Enum.Degree_045_Up_Half,
    quest_Debug_Show_Enum.Dashboard_OLED
    )
})
quest_Note_1.quest_Show_String_For_Note_Small_Func(
"2-Sequence Animation Validates New-Start"
)
basic.showIcon(IconNames.Heart)
quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds)
basic.showIcon(IconNames.Happy)
quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds)
quest_Note_1.quest_Show_String_For_Note_Big_Func(
"Below, Setup Code for Teacher:"
)
quest_Note_1.quest_Show_String_For_Note_Small_Func(
"micro:bit's LED Display is upside-down on bot"
)
display.rotateTo(display.Direction.UpsideDown)
quest_Note_1.quest_Show_String_For_Note_Big_Func(
"Below, Setup Code for Student:"
)
basic.forever(function () {
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "©️ 2025 Quest Institute. All rights reserved."
    )
})
