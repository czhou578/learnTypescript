declare function dateWizard(date: Date, format: string): string;

declare namespace dateWizard {
    interface DateDetails {
      year: number;
      month: number;
      date: number;
      hours: number;
      minutes: number;
      seconds: number
    }
  function dateDetails(date: Date): DateDetails;
  function utcDateDetails(date: Date): DateDetails;
}

export = dateWizard;
