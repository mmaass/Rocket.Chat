import emojione from 'emojione';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import mem from 'mem';

import { emojioneRender, emojioneRenderFromShort } from './emojioneRender';
import { emojisByCategory, emojiCategories, toneList } from './emojiPicker';
import { emoji } from '../../emoji';
import { getUserPreference } from '../../utils';

// TODO remove fix below when issue is solved: https://github.com/joypixels/emojione/issues/617

// add missing emojis not provided by JS object, but included on emoji.json
emojione.shortnames +=
	'|:tm:|:copyright:|:registered:|:digit_zero:|:digit_one:|:digit_two:|:digit_three:|:digit_four:|:digit_five:|:digit_six:|:digit_seven:|:digit_eight:|:digit_nine:|:pound_symbol:|:asterisk_symbol:';
emojione.regShortNames = new RegExp(
	`<object[^>]*>.*?<\/object>|<span[^>]*>.*?<\/span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(${emojione.shortnames})`,
	'gi',
);

emojione.emojioneList[':tm:'] = {
	uc_base: '2122',
	uc_output: '2122-fe0f',
	uc_match: '2122-fe0f',
	uc_greedy: '2122-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};

emojione.emojioneList[':copyright:'] = {
	uc_base: '00a9',
	uc_output: '00a9-f0ef',
	uc_match: '00a9-fe0f',
	uc_greedy: '00a9-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};

emojione.emojioneList[':registered:'] = {
	uc_base: '00ae',
	uc_output: '00ae-fe0f',
	uc_match: '00ae-fe0f',
	uc_greedy: '00ae-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};

emojione.emojioneList[':digit_zero:'] = {
	uc_base: '0030',
	uc_output: '0030-fe0f',
	uc_match: '0030-fe0f',
	uc_greedy: '0030-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};

emojione.emojioneList[':digit_one:'] = {
	uc_base: '0031',
	uc_output: '0031-fe0f',
	uc_match: '0031-fe0f',
	uc_greedy: '0031-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};

emojione.emojioneList[':digit_two:'] = {
	uc_base: '0032',
	uc_output: '0032-fe0f',
	uc_match: '0032-fe0f',
	uc_greedy: '0032-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};

emojione.emojioneList[':digit_three:'] = {
	uc_base: '0033',
	uc_output: '0033-fe0f',
	uc_match: '0033-fe0f',
	uc_greedy: '0033-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};

emojione.emojioneList[':digit_four:'] = {
	uc_base: '0034',
	uc_output: '0034-fe0f',
	uc_match: '0034-fe0f',
	uc_greedy: '0034-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};

emojione.emojioneList[':digit_five:'] = {
	uc_base: '0035',
	uc_output: '0035-fe0f',
	uc_match: '0035-fe0f',
	uc_greedy: '0035-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};

emojione.emojioneList[':digit_six:'] = {
	uc_base: '0036',
	uc_output: '0036-fe0f',
	uc_match: '0036-fe0f',
	uc_greedy: '0036-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};

emojione.emojioneList[':digit_seven:'] = {
	uc_base: '0037',
	uc_output: '0037-fe0f',
	uc_match: '0037-fe0f',
	uc_greedy: '0037-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};

emojione.emojioneList[':digit_eight:'] = {
	uc_base: '0038',
	uc_output: '0038-fe0f',
	uc_match: '0038-fe0f',
	uc_greedy: '0038-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};

emojione.emojioneList[':digit_nine:'] = {
	uc_base: '0039',
	uc_output: '0039-fe0f',
	uc_match: '0039-fe0f',
	uc_greedy: '0039-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};

emojione.emojioneList[':pound_symbol:'] = {
	uc_base: '0023',
	uc_output: '0023-fe0f',
	uc_match: '0023-fe0f',
	uc_greedy: '0023-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};

emojione.emojioneList[':asterisk_symbol:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
// end fix

// start heyschuefi fix for missing emojis
emojione.emojioneList[':star-struck:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':smiling_face_with_tear:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':face_in_clouds:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':face_exhaling:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':face_with_spiral_eyes:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':disguised_face:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':yawning_face:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':face_with_symbols_on_mouth:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':heart_on_fire:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':mending_heart:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':brown_heart:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':white_heart:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':eye-in-speech-bubble:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':hand:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':spock-hand:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':pinched_fingers:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':pinching_hand:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':crossed_fingers:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':i_love_you_hand_sign:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':the_horns:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':facepunch:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':left-facing_fist:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':right-facing_fist:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':mechanical_arm:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':mechanical_leg:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':ear_with_hearing_aid:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':anatomical_heart:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man_with_beard:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman_with_beard:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':red_haired_man:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':curly_haired_man:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':white_haired_man:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':bald_man:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':red_haired_woman:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':red_haired_person:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':curly_haired_woman:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':curly_haired_person:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':white_haired_woman:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':white_haired_person:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':bald_woman:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':bald_person:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':blond-haired-woman:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':blond-haired-man:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-frowning:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-frowning:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-pouting:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-pouting:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-gesturing-no:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-gesturing-no:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-gesturing-ok:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-gesturing-ok:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-tipping-hand:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-tipping-hand:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-raising-hand:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-raising-hand:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':deaf_man:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':deaf_person:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':deaf_woman:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-bowing:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-bowing:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-facepalming:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-facepalming:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-shrugging:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-shrugging:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':health_worker:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':male-doctor:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':female-doctor:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':student:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':male-student:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':female-student:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':teacher:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':male-teacher:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':female-teacher:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':judge:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':male-judge:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':female-judge:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':farmer:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':male-farmer:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':female-farmer:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':cook:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':male-cook:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':female-cook:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':mechanic:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':male-mechanic:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':female-mechanic:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':factory-worker:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':male-factory-worker:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':female-factory-worker:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':office-worker:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':male-office-worker:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':female-office-worker:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':scientist:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':male-scientist:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':female-scientist:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':technologist:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':male-technologist:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':female-technologist:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':singer:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':male-singer:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':female-singer:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':artist:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':male-artist:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':female-artist:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':pilot:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':male-pilot:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':female-pilot:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':astronaut:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':male-astronaut:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':female-astronaut:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':firefighter:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':male-firefighter:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':female-firefighter:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':male-police-officer:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':female-police-officer:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':male-detective:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':female-detective:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':male-guard:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':female-guard:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':ninja:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList['::'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':male-construction-worker:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':female-construction-worker:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-wearing-turban:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-wearing-turban:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':person_with_headscarf:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':person_in_tuxedo:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman_in_tuxedo:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man_with_veil:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman_with_veil:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':breast-feeding:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman_feeding_baby:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man_feeding_baby:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':person_feeding_baby:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':mx_claus:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':male_superhero:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':female_superhero:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':male_supervillain:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':female_supervillain:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':male_mage:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':female_mage:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':male_fairy:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':female_fairy:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':male_vampire:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':female_vampire:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':male_elf:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':female_elf:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':male_genie:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':female_genie:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':male_zombie:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':female_zombie:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-getting-massage:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-getting-massage:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-getting-haircut:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-getting-haircut:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-walking:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-walking:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':standing_person:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man_standing:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman_standing:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':kneeling_person:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man_kneeling:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman_kneeling:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man_with_probing_cane:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman_with_probing_cane:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':person_with_probing_cane:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man_in_motorized_wheelchair:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman_in_motorized_wheelchair:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':person_in_motorized_wheelchair:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man_in_manual_wheelchair:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman_in_manual_wheelchair:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':person_in_manual_wheelchair:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-running:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-running:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':men-with-bunny-ears-partying:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':women-with-bunny-ears-partying:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-golfing:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-golfing:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-surfing:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-surfing:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-rowing-boat:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-rowing-boat:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-swimming:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-swimming:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-bouncing-ball:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-bouncing-ball:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-lifting-weights:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-lifting-weights:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-biking:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-biking:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-mountain-biking:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-mountain-biking:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-cartwheeling:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-cartwheeling:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-wrestling:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-wrestling:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-playing-water-polo:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-playing-water-polo:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-playing-handball:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-playing-handball:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-juggling:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-juggling:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':people_holding_hands:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man_and_woman_holding_hands:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-kiss-man:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-kiss-man:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-kiss-woman:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-heart-man:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-heart-man:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-heart-woman:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-woman-boy:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-woman-girl:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-woman-girl-boy:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-woman-boy-boy:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-woman-girl-girl:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-man-boy:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-man-girl:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-man-girl-boy:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-man-boy-boy:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-man-girl-girl:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-woman-boy:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-woman-girl:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-woman-girl-boy:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-woman-boy-boy:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-woman-girl-girl:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-boy:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-boy-boy:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-girl:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-girl-boy:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':man-girl-girl:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-boy:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-boy-boy:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-girl:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-girl-boy:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':woman-girl-girl:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':people_hugging:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':orangutan:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':guide_dog:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':service_dog:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':black_cat:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':zebra_face:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':bison:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':giraffe_face:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':mammoth:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':beaver:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':polar_bear:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':sloth:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':otter:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':skunk:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':dodo:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':feather:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flamingo:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':t-rex:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':seal:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':ladybug:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':cockroach:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':fly:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':worm:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':potted_plant:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':blueberries:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':olive:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':bell_pepper:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':garlic:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':onion:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flatbread:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':waffle:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':tamale:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':falafel:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':butter:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':oyster:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':teapot:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':clinking_glasses:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':bubble_tea:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':beverage_box:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':mate_drink:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':ice_cube:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':knife_fork_plate:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':hocho:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':cricket_bat_and_ball:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':field_hockey_stick_and_ball:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':ice_hockey_stick_and_puck:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':table_tennis_paddle_and_ball:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':badminton_racquet_and_shuttlecock:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':diving_mask:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':yo-yo:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':kite:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':magic_wand:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':pinata:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':nesting_dolls:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':sewing_needle:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':knot:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':rock:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':wood:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':hut:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':hindu_temple:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':car:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':pickup_truck:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':manual_wheelchair:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':motorized_wheelchair:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':auto_rickshaw:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':roller_skate:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':boat:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':motor_boat:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':parachute:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':mantelpiece_clock:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':moon:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':ringed_planet:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':mostly_sunny:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':barely_sunny:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':partly_sunny_rain:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':rain_cloud:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':snow_cloud:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':lightning:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':tornado:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':umbrella_with_rain_drops:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':snowman_without_snow:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':safety_vest:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':sari:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':one-piece_swimsuit:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':briefs:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':shorts:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':thong_sandal:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':ballet_shoes:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':military_helmet:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':accordion:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':banjo:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':long_drum:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':phone:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':diya_lamp:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':coin:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':axe:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':boomerang:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':carpentry_saw:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':screwdriver:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':probing_cane:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':hook:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':ladder:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':satellite_antenna:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':drop_of_blood:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':adhesive_bandage:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':stethoscope:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':elevator:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':mirror:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':window:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':chair:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':plunger:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':mouse_trap:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':razor:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':lotion_bottle:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':bucket:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':toothbrush:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':headstone:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':placard:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':menorah_with_nine_branches:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':black_right_pointing_double_triangle_with_vertical_bar:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':black_right_pointing_triangle_with_double_vertical_bar:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':black_left_pointing_double_triangle_with_vertical_bar:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':black_square_for_stop:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':black_circle_for_record:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':transgender_symbol:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':fleur_de_lis:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':large_orange_circle:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':large_yellow_circle:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':large_blue_circle:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':large_green_circle:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':large_purple_circle:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':large_brown_circle:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':large_red_square:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':large_orange_square:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':large_yellow_square:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':large_green_square:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':large_blue_square:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':large_purple_square:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':large_brown_square:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':rainbow-flag:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':transgender_flag:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ac:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ad:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ae:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-af:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ag:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ai:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-al:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-am:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ao:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-aq:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ar:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-as:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-at:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-au:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-aw:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ax:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-az:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ba:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-bb:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-bd:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-be:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-bf:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-bg:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-bh:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-bi:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-bj:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-bl:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-bm:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-bn:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-bo:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-bq:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-br:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-bs:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-bt:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-bv:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-bw:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-by:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-bz:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ca:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-cc:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-cd:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-cf:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-cg:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ch:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ci:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ck:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-cl:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-cm:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-co:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-cp:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-cr:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-cu:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-cv:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-cw:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-cx:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-cy:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-cz:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-dg:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-dj:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-dk:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-dm:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-do:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-dz:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ea:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ec:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ee:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-eg:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-eh:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-er:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-et:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-eu:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-fi:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-fj:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-fk:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-fm:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-fo:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ga:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-gd:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-gf:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-gg:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-gh:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-gi:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-gl:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-gm:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-gn:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-gp:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-gq:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-gr:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-gs:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-gt:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-gu:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-gw:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-gy:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-hk:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-hm:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-hn:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-hr:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ht:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-hu:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ic:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-id:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ie:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-il:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-im:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-in:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-io:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-iq:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ir:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-is:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-je:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-jm:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-jo:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ke:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-kg:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-kh:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ki:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-km:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-kn:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-kp:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-kw:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ky:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-kz:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-la:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-lb:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-lc:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-li:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-lk:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-lr:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ls:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-lt:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-lu:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-lv:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-lv:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ly:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ma:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-mc:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-md:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-me:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-me:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-mf:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-mg:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-mh:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-mk:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ml:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-mm:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-mn:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-mo:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-mp:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-mp:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-mq:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-mr:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ms:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-mt:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-mu:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-mv:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-mw:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-mx:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-my:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-mz:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-na:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-nc:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ne:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-nf:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ng:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ni:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-nl:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-no:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-np:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-nr:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-nu:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-nz:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-om:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-pa:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-pe:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-pf:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-pg:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ph:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-pk:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-pl:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-pm:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-pn:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-pr:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ps:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-pt:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-pw:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-py:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-qa:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-re:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ro:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-rs:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-rw:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-sa:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-sb:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-sc:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-sd:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-se:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-sg:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-sh:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-si:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-sj:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-sk:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-sl:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-sm:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-sn:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-so:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-sr:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ss:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-st:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-sv:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-sx:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-sy:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-sz:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ta:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-tc:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-td:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-tf:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-tg:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-th:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-tj:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-tk:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-tl:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-tm:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-tn:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-to:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-tr:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-tt:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-tv:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-tw:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-tz:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ua:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ug:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-um:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-un:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-uy:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-uz:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-va:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-vc:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ve:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-vg:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-vi:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-vn:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-vu:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-wf:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ws:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-xk:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-ye:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-yt:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-za:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-zm:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-zw:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-england:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-scottland:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
emojione.emojioneList[':flag-wales:'] = {
	uc_base: '002a',
	uc_output: '002a-fe0f',
	uc_match: '002a-fe0f',
	uc_greedy: '002a-fe0f',
	shortnames: [],
	category: 'symbols',
	emojiPackage: 'emojione',
};
// end heyschuefi fix for missing emojis

// fix for :+1: - had to replace all function that does its conversion: https://github.com/joypixels/emojione/blob/4.5.0/lib/js/emojione.js#L249
(function (ns) {
	ns.shortnameConversionMap = mem(ns.shortnameConversionMap, { maxAge: 1000 });

	ns.unicodeCharRegex = mem(ns.unicodeCharRegex, { maxAge: 1000 });

	const convertShortName = mem(
		function (shortname) {
			// the fix is basically adding this .replace(/[+]/g, '\\$&')
			if (typeof shortname === 'undefined' || shortname === '' || ns.shortnames.indexOf(shortname.replace(/[+]/g, '\\$&')) === -1) {
				// if the shortname doesnt exist just return the entire match
				return shortname;
			}

			// map shortname to parent
			if (!ns.emojioneList[shortname]) {
				for (const emoji in ns.emojioneList) {
					if (!ns.emojioneList.hasOwnProperty(emoji) || emoji === '') {
						continue;
					}
					if (ns.emojioneList[emoji].shortnames.indexOf(shortname) === -1) {
						continue;
					}
					shortname = emoji;
					break;
				}
			}

			const unicode = ns.emojioneList[shortname].uc_output;
			const fname = ns.emojioneList[shortname].uc_base;
			const category = fname.indexOf('-1f3f') >= 0 ? 'diversity' : ns.emojioneList[shortname].category;
			const title = ns.imageTitleTag ? `title="${shortname}"` : '';
			// const size = ns.spriteSize === '32' || ns.spriteSize === '64' ? ns.spriteSize : '32';
			// if the emoji path has been set, we'll use the provided path, otherwise we'll use the default path
			const ePath = ns.defaultPathPNG !== ns.imagePathPNG ? ns.imagePathPNG : `${ns.defaultPathPNG + ns.emojiSize}/`;

			// depending on the settings, we'll either add the native unicode as the alt tag, otherwise the shortname
			const alt = ns.unicodeAlt ? ns.convert(unicode.toUpperCase()) : shortname;

			if (ns.sprites) {
				return `<span class="emojione emojione-${category} _${fname}" ${title}>${alt}</span>`;
			}
			return `<img class="emojione" alt="${alt}" ${title} src="${ePath}${fname}${ns.fileExtension}"/>`;
		},
		{ maxAge: 1000 },
	);

	const convertUnicode = mem(
		function (entire, m1, m2, m3) {
			const mappedUnicode = ns.mapUnicodeToShort();

			if (typeof m3 === 'undefined' || m3 === '' || !(ns.unescapeHTML(m3) in ns.asciiList)) {
				// if the ascii doesnt exist just return the entire match
				return entire;
			}

			m3 = ns.unescapeHTML(m3);
			const unicode = ns.asciiList[m3];
			const shortname = mappedUnicode[unicode];
			const category = unicode.indexOf('-1f3f') >= 0 ? 'diversity' : ns.emojioneList[shortname].category;
			const title = ns.imageTitleTag ? `title="${ns.escapeHTML(m3)}"` : '';
			// const size = ns.spriteSize === '32' || ns.spriteSize === '64' ? ns.spriteSize : '32';
			// if the emoji path has been set, we'll use the provided path, otherwise we'll use the default path
			const ePath = ns.defaultPathPNG !== ns.imagePathPNG ? ns.imagePathPNG : `${ns.defaultPathPNG + ns.emojiSize}/`;

			// depending on the settings, we'll either add the native unicode as the alt tag, otherwise the shortname
			const alt = ns.unicodeAlt ? ns.convert(unicode.toUpperCase()) : ns.escapeHTML(m3);

			if (ns.sprites) {
				return `${m2}<span class="emojione emojione-${category} _${unicode}"  ${title}>${alt}</span>`;
			}
			return `${m2}<img class="emojione" alt="${alt}" ${title} src="${ePath}${unicode}${ns.fileExtension}"/>`;
		},
		{ maxAge: 1000, cacheKey: JSON.stringify },
	);

	ns.shortnameToImage = function (str) {
		// replace regular shortnames first
		str = str.replace(ns.regShortNames, convertShortName);

		// if ascii smileys are turned on, then we'll replace them!
		if (ns.ascii) {
			const asciiRX = ns.riskyMatchAscii ? ns.regAsciiRisky : ns.regAscii;

			return str.replace(asciiRX, convertUnicode);
		}

		return str;
	};
})(emojione);

emoji.packages.emojione = emojione;
emoji.packages.emojione.sprites = true;
emoji.packages.emojione.emojisByCategory = emojisByCategory;
emoji.packages.emojione.emojiCategories = emojiCategories;
emoji.packages.emojione.toneList = toneList;

emoji.packages.emojione.render = emojioneRender;
emoji.packages.emojione.renderPicker = emojioneRenderFromShort;

// http://stackoverflow.com/a/26990347 function isSet() from Gajus
function isSetNotNull(fn) {
	let value;
	try {
		value = fn();
	} catch (e) {
		value = null;
	}
	return value !== null && value !== undefined;
}

// RocketChat.emoji.list is the collection of emojis from all emoji packages
for (const key in emojione.emojioneList) {
	if (emojione.emojioneList.hasOwnProperty(key)) {
		const currentEmoji = emojione.emojioneList[key];
		currentEmoji.emojiPackage = 'emojione';
		emoji.list[key] = currentEmoji;

		if (currentEmoji.shortnames) {
			currentEmoji.shortnames.forEach((shortname) => {
				emoji.list[shortname] = currentEmoji;
			});
		}
	}
}

// Additional settings -- ascii emojis
Meteor.startup(function () {
	Tracker.autorun(function () {
		if (isSetNotNull(() => emoji.packages.emojione)) {
			if (isSetNotNull(() => getUserPreference(Meteor.userId(), 'convertAsciiEmoji'))) {
				emoji.packages.emojione.ascii = getUserPreference(Meteor.userId(), 'convertAsciiEmoji');
			} else {
				emoji.packages.emojione.ascii = true;
			}
		}
	});
});
