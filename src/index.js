import Midium from 'midium';

const MODULATION_WHEEL = 0x01;
const MODULATION_WHEEL_MODE = 0x1f;
const SUBMODE_SELECT = 0x03;
const PORTAMENTO_TIME = 0x05;
const OUT_VOLUME = 0x07;
const PWM_1_2 = 0xa;
const ANALOG_FILTER_CUTOFF = 0xe;
const DIGITAL_FILTER_RESONANCE = 0xf;
const ADSR_RELEASE = 0x10;
const ADSR_ATTACK = 0x11;
const DIGITAL_FILTER_CUTOFF = 0x12;
const ADSR_DECAY = 0x13;
const OSC_VOLUME = 0x14;
const ADSR_SUSTAIN = 0x15;
const DC_OFFSET_FILTER = 0x16;
const PWM_2 = 0x17;
const WAVEFORM = 0x18;
const PWM_1 = 0x19;
const DUAL_DETUNE = 0x1a;
const DUAL_OCTAVE = 0x1b;
const DIGITAL_FILTER_TYPE = 0x1c;
const FILTER_LINK_ADSR = 0x1d;
const KEY_OFF_ATTACK = 0x1e;
const SUSTAIN_HOLD = 0x40;
const PORTAMENTO = 0x41;
const DC_OFFSET_WAVE = 0x53;
const LFO_PWM_MOD = 0x55;
const LFO_PITCH_MOD = 0x56;
const LFO_FILTER_MOD = 0x57;
const LFO_AMP_MOD = 0x58;
const NOTE_PRIORITY = 0x59;
const ALL_SOUNDS_OFF = 0x78;
const ALL_NOTES_OFF = 0x7b;
const MONO_ON = 0x7e;
const DUAL_ON = 0x7f;

function setMode(mode) {
	switch(mode) {
		case 'mono':
			this.controlChange(MONO_ON, 0, 1);
			break;
		case 'dual':
			ths.controlChange(DUAL_ON, 0, 1);
			break;
		case 'detune':
			this.controlChange(DUAL_DETUNE, 0, 1);
			break;
		case 'octave':
			this.controlChange(DUAL_OCTAVE, 0, 1);
			break;
	}
}

Object.assign(Midium.prototype, {
	pl2 : {
		setMode : setMode
	}
});
