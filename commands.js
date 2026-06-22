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

const ALL_COMMANDS = [TEST_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
