<p align="center"><a href="https://nitric.io" target="_blank"><img src="https://raw.githubusercontent.com/nitrictech/nitric/main/docs/assets/nitric-logo.svg" height="120"></a></p>

## Nitric Serverless Hardware Probe

A simple nitric service that can be easily deployed to serverless platforms on AWS Lambda, Azure Container Apps, Google Cloud Run. The service will simply `cat` `/proc/cpuinfo` in order to try and get information on the capabilities of the hardware that the program is executing on.