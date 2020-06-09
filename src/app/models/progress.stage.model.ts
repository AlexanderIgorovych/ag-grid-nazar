export interface IProgressStage {
	inProgress: boolean;
	succeed: boolean;
	failed: boolean;
}

export class ProgressStages {
	public static Initial: IProgressStage = {
		inProgress: false,
		succeed: false,
		failed: false,
	};

	public static InProgress: IProgressStage = {
		inProgress: true,
		succeed: false,
		failed: false,
	};

	public static Succeed: IProgressStage = {
		inProgress: false,
		succeed: true,
		failed: false,
	};

	public static Failed: IProgressStage = {
		inProgress: false,
		succeed: false,
		failed: true,
	};
}
