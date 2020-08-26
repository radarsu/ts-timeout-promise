import { packageScripts } from '@radrat-scripts/package';
import { readmeScripts } from '@radrat-scripts/readme';
import { IRadratCli } from '@radrat/cli';

const scripts = async (cli: IRadratCli) => {
    await packageScripts(cli);
    await readmeScripts(cli);
};

export default scripts;
