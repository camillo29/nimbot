import 'dotenv/config';
import { capitalize, InstallGlobalCommands } from './utils.js';
import { SlashCommandBuilder } from 'discord.js';

const TEST_COMMAND = {
    name: 'test',
    description: 'Test aplikacji',
    type: 1,
    integration_types: [0, 1],
    contexts: [0, 1, 2],
}

const RANDOM_GIF = {
    name: 'randomgif',
    description: 'Wyślij randomowe gifa',
    type: 1,
    integration_types: [0, 1],
    contexts: [0, 1, 2],
}

const POSPRZATAJ = {
    name: 'posprzataj',
    description: 'posprzataj',
    type: 1,
    integration_types: [0, 1],
    contexts: [0, 1, 2],
}

const ALL_COMMANDS = [TEST_COMMAND, RANDOM_GIF, POSPRZATAJ];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
