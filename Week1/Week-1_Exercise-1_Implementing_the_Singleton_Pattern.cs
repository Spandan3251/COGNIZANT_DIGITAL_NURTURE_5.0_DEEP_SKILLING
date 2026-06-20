using System;

namespace DesignPatternsPrinciples
{
    public class Logger
    {
        private static readonly Logger instance = new Logger();

        private Logger()
        {
            Console.WriteLine("Logger has been initialized.");
        }

        public static Logger Instance => instance;

        public void LogMessage(string message)
        {
            Console.WriteLine($"[Log] {message}");
        }
    }


    class LoggerMain
    {
        static void Main(string[] args)
        {
            Logger logger1 = Logger.Instance;
            Logger logger2 = Logger.Instance;

            logger1.LogMessage("System is starting.");
            logger2.LogMessage("Executing main workflow...");

            if (ReferenceEquals(logger1, logger2))
            {
                Console.WriteLine("Confirmed: logger1 and logger2 refer to the same instance. So SINGLETON is WORKING");
            }
            else
            {
                Console.WriteLine("Singleton failed: Different logger instances created.");
            }
        }
    }
}