import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"


import video1 from "../../../dist/public/assets/vid1-BfcQ5-gp.mp4"
import video2 from "../../../dist/public/assets/vid2-_v4iLnFt.mp4"
import video3 from "../../../dist/public/assets/vid3-C7rcaIdZ.mp4"
import video4 from "../../../dist/public/assets/vid4-Cmxm4hSH.mp4"
import video5 from "../../../dist/public/assets/vid5-BUueyLW2.mp4"

export default function Gallery() {
  return (
<>
            <Card className="p-0">
              <CardContent className="flex items-center justify-center p-6">
                <video
                  autoPlay
                  loop
                  muted
                  controls={false}
                  className="min-w-[200px] max-h-[410px] object-cover rounded-lg"
                >
                  <source src={video1} type="video/mp4" />
                </video>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center justify-center p-6">
                <video
                  autoPlay
                  loop
                  muted
                  controls={false}
                  className="min-w-[200px] max-h-[410px] object-cover rounded-lg"
                >
                  <source src={video2} type="video/mp4" />
                </video>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center justify-center p-6">
                <video
                  autoPlay
                  loop
                  muted
                  controls={false}
                  className="min-w-[200px] max-h-[410px] object-cover rounded-lg"
                >
                  <source src={video3} type="video/mp4" />
                </video>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center justify-center p-6">
                <video
                  autoPlay
                  loop
                  muted
                  controls={false}
                  className="min-w-[200px] max-h-[410px] object-cover rounded-lg"
                >
                  <source src={video4} type="video/mp4" />
                </video>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center justify-center p-6">
                <video
                  autoPlay
                  loop
                  muted
                  controls={false}
                  className="min-w-[200px] max-h-[410px] object-cover rounded-lg"
                >
                  <source src={video5} type="video/mp4" />
                </video>
              </CardContent>
            </Card>
            </>
  )
}

